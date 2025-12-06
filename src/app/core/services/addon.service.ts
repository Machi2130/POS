import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Addon } from '../models/addon.model';

@Injectable({
  providedIn: 'root'
})
export class AddonService {
  private addons: Addon[] = [
    {
      id: 'advanced-inventory',
      name: 'Advanced Inventory Management',
      description: 'Track stock levels across multiple locations, manage suppliers, and automate purchase orders.',
      icon: 'inventory_2',
      price: 25,
      interval: 'month',
      enabled: true,
      category: 'Operations'
    },
    {
      id: 'ecommerce-integration',
      name: 'E-commerce Integration',
      description: 'Sync your in-store inventory and sales with your online Shopify or WooCommerce store in real-time.',
      icon: 'shopping_cart',
      price: 20,
      interval: 'month',
      enabled: true,
      category: 'Integration'
    },
    {
      id: 'employee-management',
      name: 'Employee Management',
      description: 'Manage employee roles, permissions, and track sales performance with detailed reports.',
      icon: 'groups',
      price: 15,
      interval: 'month',
      enabled: true,
      category: 'Team'
    },
    {
      id: 'advanced-reporting',
      name: 'Advanced Reporting Suite',
      description: 'Access in-depth sales analytics, customer behavior insights, and customizable dashboards.',
      icon: 'bar_chart_4_bars',
      price: 30,
      interval: 'month',
      enabled: true,
      category: 'Analytics'
    }
  ];

  constructor() {}

  getAddons(): Observable<Addon[]> {
    return of(this.addons);
  }
}
