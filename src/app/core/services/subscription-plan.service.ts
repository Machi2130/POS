import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SubscriptionPlan, BillingCycle } from '../models/subscription-plan.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPlanService {
  private billingCycleSubject = new BehaviorSubject<BillingCycle>(BillingCycle.MONTHLY);
  public billingCycle$ = this.billingCycleSubject.asObservable();

  constructor() {}

  getPlans(): Observable<SubscriptionPlan[]> {
    // Mock data - replace with actual API call
    const plans: SubscriptionPlan[] = [
      {
        id: '1',
        name: 'Basic',
        description: 'Perfect for small businesses',
        price: {
          monthly: 29,
          yearly: 290,
          currencySymbol: '$'
        },
        billingCycle: BillingCycle.MONTHLY,
        features: [
          { name: 'Up to 100 products', enabled: true },
          { name: 'Basic reporting', enabled: true },
          { name: 'Email support', enabled: true }
        ],
        isPopular: false,
        isCurrentPlan: false,
        buttonAction: 'upgrade',
        displayName: 'Basic',
        isRecommended: false,
        buttonText: 'Get Started'
      },
      {
        id: '2',
        name: 'Pro',
        description: 'For growing businesses',
        price: {
          monthly: 79,
          yearly: 790,
          currencySymbol: '$'
        },
        billingCycle: BillingCycle.MONTHLY,
        features: [
          { name: 'Unlimited products', enabled: true },
          { name: 'Advanced reporting', enabled: true },
          { name: 'Priority support', enabled: true },
          { name: 'API access', enabled: true }
        ],
        isPopular: true,
        isCurrentPlan: true,
        buttonAction: 'upgrade',
        displayName: 'Pro',
        isRecommended: true,
        buttonText: 'Upgrade to Pro'
      },
      {
        id: '3',
        name: 'Enterprise',
        description: 'For large organizations',
        price: {
          monthly: 199,
          yearly: 1990,
          currencySymbol: '$'
        },
        billingCycle: BillingCycle.MONTHLY,
        features: [
          { name: 'Everything in Pro', enabled: true },
          { name: 'Custom integrations', enabled: true },
          { name: 'Dedicated support', enabled: true },
          { name: 'SLA guarantee', enabled: true }
        ],
        isPopular: false,
        isCurrentPlan: false,
        buttonAction: 'upgrade',
        displayName: 'Enterprise',
        isRecommended: false,
        buttonText: 'Contact Sales'
      }
    ];
    return of(plans);
  }

  setBillingCycle(cycle: BillingCycle): void {
    this.billingCycleSubject.next(cycle);
  }

  changePlan(planId: string): Observable<any> {
    // Mock API call
    return of({ success: true });
  }

  getSavingsPercentage(plan: SubscriptionPlan): number {
    if (plan.price.monthly && plan.price.yearly) {
      const monthlyYearly = plan.price.monthly * 12;
      return Math.round(((monthlyYearly - plan.price.yearly) / monthlyYearly) * 100);
    }
    return 0;
  }
}
