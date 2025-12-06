import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="flex-1 p-8">
      <h1 class="text-white text-4xl font-black mb-6">Billing</h1>
      <div class="rounded-lg bg-card-dark p-6 border border-white/10">
        <p class="text-gray-300">Billing module content goes here</p>
      </div>
    </main>
  `
})
export class BillingComponent {}
