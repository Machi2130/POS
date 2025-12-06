export interface SubscriptionHistory {
  id: string;
  planName: string;
  amount: number;
  currency: string;
  billingCycle: string;
  status: SubscriptionStatus;
  startDate: Date;
  endDate?: Date;
  paymentMethod?: string;
  date: Date;
  currencySymbol: string;
  paymentStatus: string;
  planType: string;
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired',
  PENDING = 'pending'
}
