import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, TopnavComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  isSidebarCollapsed = false;

  onSidebarToggle(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}
