import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ConfigService } from '../../core/services/config.service';
import { MenuItem } from '../../core/models/menu-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  
  menuItems$!: Observable<MenuItem[]>;
  companyName$!: Observable<string>;
  companyLogo$!: Observable<string>;
  isCollapsed: boolean = false;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    const config$ = this.configService.getConfig();
    this.menuItems$ = config$.pipe(
      map(config => config.menuItems || [])
    );

    this.companyName$ = config$.pipe(
      map(config => config.companyName || 'POS Pro')
    );

    this.companyLogo$ = config$.pipe(
      map(config => config.companyLogo || 'https://via.placeholder.com/40')
    );
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit(this.isCollapsed);
  }
}
