import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppConfig, MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {}

  getConfig(): Observable<AppConfig> {
    const config: AppConfig = {
      companyName: 'POS Pro',
      companyLogo: 'https://via.placeholder.com/150',
      menuItems: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: 'dashboard',
          route: '/dashboard',
          enabled: true,
          order: 1
        },
        {
          id: 'inventory',
          label: 'Inventory',
          icon: 'inventory_2',  // ✅ Material icon
          route: '/inventory',
          enabled: true,
          order: 2
        },
        {
          id: 'billing',
          label: 'Billing',
          icon: 'receipt_long', 
          route: '/billing',
          enabled: true,
          order: 3
        },
        {
          id: 'reports',
          label: 'Reports',
          icon: 'assessment',  
          route: '/reports',
          enabled: true,
          order: 4
        },
        {
          id: 'subscription',
          label: 'Subscription',
          icon: 'workspace_premium',
          enabled: true,
          order: 5,
          children: [
            {
              id: 'subscription-plans',
              label: 'Plans',
              icon: 'credit_card',
              route: '/subscription/plans',
              enabled: true,
              order: 1
            },
            {
              id: 'subscription-history',
              label: 'History',
              icon: 'history',
              route: '/subscription/history',
              enabled: true,
              order: 2
            }
          ]
        },
        {
          id: 'settings',
          label: 'Settings',
          icon: 'settings',
          route: '/settings',
          enabled: true,
          order: 6
        },
        {
          id: 'customers',
          label: 'Customers',
          icon: 'group',  
          route: '/customers',
          enabled: true,
          order: 7
        }
      ]
    };
    return of(config);
  }
}
