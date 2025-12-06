import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AddonService } from '../../../core/services/addon.service';
import { Addon, AddonSelection } from '../../../core/models/addon.model';

@Component({
  selector: 'app-subscription-addons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './subscription-addons.component.html',
  styleUrls: ['./subscription-addons.component.scss']
})
export class SubscriptionAddonsComponent implements OnInit {
  addons: AddonSelection[] = [];
  currentPlan = {
    name: 'Gold Plan',
    price: 99
  };

  constructor(
    private addonService: AddonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAddons();
  }

  loadAddons(): void {
    this.addonService.getAddons().subscribe(addons => {
      this.addons = addons.map(addon => ({
        addon,
        selected: addon.id === 'ecommerce-integration' || addon.id === 'advanced-reporting'
      }));
    });
  }

  toggleAddon(index: number): void {
    this.addons[index].selected = !this.addons[index].selected;
  }

  get selectedAddons(): AddonSelection[] {
    return this.addons.filter(a => a.selected);
  }

  get subtotal(): number {
    const addonsTotal = this.selectedAddons.reduce((sum, a) => sum + a.addon.price, 0);
    return this.currentPlan.price + addonsTotal;
  }

  get tax(): number {
    return this.subtotal * 0.08;
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  continueToPayment(): void {
    console.log('Selected add-ons:', this.selectedAddons);
    alert(`Total: $${this.total.toFixed(2)}\nSelected ${this.selectedAddons.length} add-on(s)`);
  }
}
