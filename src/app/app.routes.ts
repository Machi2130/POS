import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { BillingComponent } from './features/billing/billing.component';
import { InventoryComponent } from './features/inventory/inventory.component';
import { ReportsComponent } from './features/reports/reports.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'reports', component: ReportsComponent },
      {
        path: 'subscription',
        children: [
          {
            path: 'plans',
            loadComponent: () =>
              import('./features/subscription/subscription-plans.component')
                .then(m => m.SubscriptionPlansComponent)
          },
          {
            path: 'history',
            loadComponent: () =>
              import('./features/subscription/subscription-history/subscription-history.component')
                .then(m => m.SubscriptionHistoryComponent)
          },
          {
            path: 'addons',  // ✅ NEW ROUTE
            loadComponent: () =>
              import('./features/subscription/subscription-addons/subscription-addons.component')
                .then(m => m.SubscriptionAddonsComponent)
          },
          { path: '', redirectTo: 'plans', pathMatch: 'full' }
        ]
      },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
