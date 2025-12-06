
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPlan, BillingCycle } from '../../../../core/models/subscription-plan.model';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {
  @Input() plan!: SubscriptionPlan;
  @Input() billingCycle: BillingCycle = BillingCycle.MONTHLY;
  @Output() selectPlan = new EventEmitter<SubscriptionPlan>();

  get priceLabel(): string {
    const price = this.plan.price[this.billingCycle];
    return `$${price}`;
  }

  get periodLabel(): string {
    return this.billingCycle === BillingCycle.MONTHLY ? '/month' : '/year';
  }

  get currentPrice(): number {
    return this.plan.price[this.billingCycle];
  }

  onSelectPlan(): void {
    this.selectPlan.emit(this.plan);
  }
}
