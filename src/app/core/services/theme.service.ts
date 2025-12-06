import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'theme_mode';
  private isDarkSubject = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDarkSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  initializeTheme(): void {
    const stored = localStorage.getItem(this.storageKey);
    const isDark = stored ? stored === 'dark' : true;
    this.applyTheme(isDark);
  }

  toggleTheme(): void {
    this.applyTheme(!this.isDarkSubject.value);
  }

  private applyTheme(isDark: boolean): void {
    this.isDarkSubject.next(isDark);
    const body = document.body;
    if (isDark) {
      body.classList.add('dark');
      body.classList.remove('light');
      localStorage.setItem(this.storageKey, 'dark');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
      localStorage.setItem(this.storageKey, 'light');
    }
  }
}
