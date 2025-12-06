import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionHistoryService } from '../../../core/services/subscription-history.service';
import { SubscriptionHistory } from '../../../core/models/subscription-history.model';

interface Filter {
  label: string;
  type: string;
  active: boolean;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

@Component({
  selector: 'app-subscription-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-history.component.html',
  styleUrls: ['./subscription-history.component.scss']
})
export class SubscriptionHistoryComponent implements OnInit {
  history: SubscriptionHistory[] = [];
  isLoading = true;
  filters: Filter[] = [
    { label: 'All', type: 'all', active: true },
    { label: 'Active', type: 'active', active: false },
    { label: 'Expired', type: 'expired', active: false },
    { label: 'Cancelled', type: 'cancelled', active: false }
  ];
  pagination: Pagination = {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  };

  constructor(private historyService: SubscriptionHistoryService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  private loadHistory(): void {
    this.historyService.getHistory().subscribe({
      next: (data: SubscriptionHistory[]) => {
        this.history = data;
        this.isLoading = false;
        this.updatePagination();
      },
      error: (error: any) => {
        console.error('Error loading subscription history:', error);
        this.isLoading = false;
      }
    });
  }

  onDownloadHistory(): void {
    // TODO: Implement download functionality
    console.log('Downloading history...');
  }

  onFilterChange(type: string): void {
    this.filters.forEach(filter => filter.active = filter.type === type);
    // TODO: Apply filter to history data
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'paid':
      case 'active':
        return 'bg-success';
      case 'pending':
        return 'bg-warning';
      case 'failed':
      case 'cancelled':
        return 'bg-error';
      default:
        return 'bg-muted';
    }
  }

  getTypeClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'upgrade':
        return 'bg-success';
      case 'downgrade':
        return 'bg-warning';
      case 'renewal':
        return 'bg-info';
      default:
        return 'bg-muted';
    }
  }

  onPageChange(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      // TODO: Load data for the new page
    }
  }

  getPaginationPages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const start = Math.max(1, this.pagination.currentPage - 2);
    const end = Math.min(this.pagination.totalPages, this.pagination.currentPage + 2);

    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push('...');
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < this.pagination.totalPages) {
      if (end < this.pagination.totalPages - 1) {
        pages.push('...');
      }
      pages.push(this.pagination.totalPages);
    }

    return pages;
  }

  private updatePagination(): void {
    this.pagination.totalItems = this.history.length;
    this.pagination.totalPages = Math.ceil(this.pagination.totalItems / this.pagination.itemsPerPage);
  }
}
