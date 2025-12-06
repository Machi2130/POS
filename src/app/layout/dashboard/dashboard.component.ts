import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  stats = [
    { title: 'Total Sales', value: '$12,345', change: '+12.5%', isPositive: true },
    { title: 'Orders', value: '1,234', change: '+8.2%', isPositive: true },
    { title: 'Customers', value: '567', change: '-2.1%', isPositive: false }
  ];

  recentActivities = [
    { title: 'New sale completed', time: '2 minutes ago', icon: 'shopping_cart', iconColor: 'green' },
    { title: 'Customer added', time: '15 minutes ago', icon: 'person_add', iconColor: 'blue' },
    { title: 'Inventory updated', time: '1 hour ago', icon: 'inventory', iconColor: 'purple' }
  ];

  constructor(private router: Router) {}

  onNewSale() {
    this.router.navigate(['/billing']);
  }

  onAddItem() {
    this.router.navigate(['/inventory']);
  }

  onAddCustomer() {
    console.log('Add Customer clicked');
  }

  onViewReports() {
    this.router.navigate(['/reports']);
  }

  onConnectBank() {
    console.log('Connect Bank clicked');
  }
}
