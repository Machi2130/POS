import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="settings-container p-6 lg:p-10">
      <h1 class="text-3xl font-bold mb-6">Settings</h1>

      <!-- Settings Sections -->
      <div class="grid gap-6">

        <!-- Account Section -->
        <div class="settings-card bg-card-dark p-6 rounded-xl border border-white/10">
          <h2 class="text-xl font-bold mb-4">Account Settings</h2>
          <!-- Account settings content -->
        </div>

        <!-- Subscription Section -->
        <div class="settings-card bg-card-dark p-6 rounded-xl border border-white/10">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold">Subscription</h2>
            <span class="badge bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Pro Plan
            </span>
          </div>

          <p class="text-sm mb-4" style="color: var(--text-secondary)">
            Manage your subscription, view billing history, and upgrade your plan.
          </p>

          <div class="flex flex-wrap gap-3">
            <button
              routerLink="/subscription/plans"
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors btn-upgrade"
            >
              <span class="material-symbols-outlined text-lg">workspace_premium</span>
              <span>View Plans</span>
            </button>

            <button
              routerLink="/subscription/history"
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors btn-manage"
            >
              <span class="material-symbols-outlined text-lg">history</span>
              <span>Billing History</span>
            </button>
          </div>
        </div>

        <!-- Other settings sections... -->
      </div>
    </div>
  `
})
export class SettingsComponent {}
