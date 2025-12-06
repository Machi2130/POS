import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SubscriptionHistory, SubscriptionStatus } from '../models/subscription-history.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionHistoryService {

  constructor() {}

  getHistory(): Observable<SubscriptionHistory[]> {
    // Mock data - replace with actual API call
    const history: SubscriptionHistory[] = [
      {
        id: '1',
        planName: 'Pro Plan',
        amount: 79,
        currency: 'USD',
        billingCycle: 'monthly',
        status: SubscriptionStatus.ACTIVE,
        startDate: new Date('2023-01-01'),
        paymentMethod: 'Credit Card',
        date: new Date('2023-01-01'),
        currencySymbol: '$',
        paymentStatus: 'paid',
        planType: 'monthly'
      },
      {
        id: '2',
        planName: 'Basic Plan',
        amount: 29,
        currency: 'USD',
        billingCycle: 'monthly',
        status: SubscriptionStatus.CANCELLED,
        startDate: new Date('2022-12-01'),
        endDate: new Date('2022-12-31'),
        paymentMethod: 'PayPal',
        date: new Date('2022-12-01'),
        currencySymbol: '$',
        paymentStatus: 'cancelled',
        planType: 'monthly'
      }
    ];
    return of(history);
  }
}
