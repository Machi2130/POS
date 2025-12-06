import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
// import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';

interface ProfileMenuItem {
  label?: string;
  route?: string;
  icon?: string;
  color?: string;
  divider?: boolean;
}

interface DividerMenuItem {
  divider: boolean;
}

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  searchQuery: string = '';
  userAvatar: string = 'https://via.placeholder.com/40';
  showProfileMenu: boolean = false;

  profileMenuItems: ProfileMenuItem[] = [
    { label: 'Profile', route: '/profile', icon: 'person' },
    { label: 'Subscription', route: '/subscription/plans', icon: 'workspace_premium' },
    { label: 'Billing History', route: '/subscription/history', icon: 'receipt_long' },
    { label: 'Settings', route: '/settings', icon: 'settings' },
    { divider: true },
    { label: 'Sign Out', route: '/auth/logout', icon: 'logout', color: 'danger' }
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }

  onThemeToggle(): void {
    this.themeService.toggleTheme();
  }

  onNotificationClick(): void {
    console.log('Notifications clicked');
  }

  onProfileClick(): void {
    this.showProfileMenu = !this.showProfileMenu;
  }

  onProfileMenuItemClick(item: ProfileMenuItem): void {
    console.log('Profile menu item clicked:', item.label);
    this.showProfileMenu = false;
  }
}
