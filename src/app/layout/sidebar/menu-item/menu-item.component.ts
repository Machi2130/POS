import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MenuItem } from '../../../core/models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit, OnDestroy {
  @Input() item!: MenuItem;
  @Input() collapsed = false;

  isExpanded = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Auto-expand submenu if current route is a child route
    this.checkAndExpandIfActive();

    // Listen to navigation events to auto-expand when navigating to child routes
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.checkAndExpandIfActive();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSubmenu(): void {
    if (this.item.children && this.item.children.length > 0) {
      this.isExpanded = !this.isExpanded;
    }
  }

  hasChildren(): boolean {
    return !!(this.item.children && this.item.children.length > 0);
  }

  isSubmenuActive(): boolean {
    if (!this.item.children) return false;
    return this.item.children.some(child => this.router.isActive(child.route || '', false));
  }

  private checkAndExpandIfActive(): void {
    if (this.isSubmenuActive() && !this.isExpanded) {
      this.isExpanded = true;
    }
  }
}
