import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { SubscriptionPlanService } from '../../core/services/subscription-plan.service';
import { SubscriptionPlan, BillingCycle } from '../../core/models/subscription-plan.model';

@Component({
  selector: 'app-subscription-plans',
  standalone: true,
  imports: [CommonModule, PlanCardComponent],
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss']
})
export class SubscriptionPlansComponent implements OnInit, OnDestroy {
  plans: SubscriptionPlan[] = [];
  billingCycle: BillingCycle = BillingCycle.MONTHLY;
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private subscriptionService: SubscriptionPlanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPlans();

    // Subscribe to billing cycle changes
    this.subscriptionService.billingCycle$
      .pipe(takeUntil(this.destroy$))
      .subscribe(cycle => {
        this.billingCycle = cycle;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPlans(): void {
    this.isLoading = true;
    this.subscriptionService.getPlans()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (plans: SubscriptionPlan[]) => {
          this.plans = plans;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error loading plans:', error);
          this.isLoading = false;
        }
      });
  }

  onBillingCycleChange(cycle: string): void {
    const billingCycle = cycle as BillingCycle;
    this.billingCycle = billingCycle;
    this.subscriptionService.setBillingCycle(billingCycle);
  }

  onSelectPlan(plan: SubscriptionPlan): void {
    if (plan.isCurrentPlan) {
      // Navigate to manage subscription
      this.router.navigate(['/settings/subscription']);
      return;
    }

    if (confirm(`Are you sure you want to ${plan.buttonAction} to ${plan.displayName} plan?`)) {
      this.subscriptionService.changePlan(plan.id).subscribe({
        next: () => {
          alert(`Successfully ${plan.buttonAction}d to ${plan.displayName} plan!`);
          this.loadPlans(); // Reload to update current plan
        },
        error: (error: any) => {
          alert(`Failed to change plan: ${error.message}`);
        }
      });
    }
  }

  getSavingsPercentage(plan: SubscriptionPlan): number {
    return this.subscriptionService.getSavingsPercentage(plan);
  }
}
