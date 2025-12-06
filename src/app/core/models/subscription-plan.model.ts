export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
    currencySymbol: string;
  };
  billingCycle: BillingCycle;
  features: Feature[];
  isPopular?: boolean;
  isCurrentPlan?: boolean;
  buttonAction?: string;
  displayName?: string;
  isRecommended?: boolean;
  buttonText?: string;
}

export interface Feature {
  name: string;
  enabled: boolean;
}

export enum BillingCycle {
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}
