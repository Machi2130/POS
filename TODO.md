# Angular Build Errors TODO List

- [x] TS2739: Type mismatch in subscription-history.service.ts line 15 - missing properties from SubscriptionHistory: date, currencySymbol, paymentStatus, planType
- [x] TS2739: Type mismatch in subscription-history.service.ts line 25 - missing properties from SubscriptionHistory: date, currencySymbol, paymentStatus, planType
- [x] TS2339: Property 'isDarkModeSubject' does not exist on ThemeService in theme.service.ts line 19
- [x] TS1146: Declaration expected in plan-card.component.ts line 2
- [x] TS2304: Cannot find name 'BillingCycle' in plan-card.component.ts line 2 (type annotation)
- [x] TS2304: Cannot find name 'BillingCycle' in plan-card.component.ts line 2 (default value)
- [x] TS2306: plan-card.component.ts is not a module - import error in subscription-plans.component.ts line 5
- [x] NG1010: 'imports' must be an array - PlanCardComponent not recognized in subscription-plans.component.ts line 12
- [x] TS2339: Property 'isDarkMode$' does not exist on ThemeService in topnav.component.html line 28
- [x] TS2339: Property 'isDarkMode$' does not exist on ThemeService in topnav.component.html line 30

# CSS Semantic Classes Implementation TODO List

## Phase 1: Core Classes ✅ COMPLETED
- [x] Add semantic button classes (.btn-add, .btn-edit, .btn-delete, .btn-save, .btn-cancel)
- [x] Add semantic form classes (.form-group, .form-label, .form-input, .form-error)
- [x] Add semantic layout classes (.container-card, .container-form)
- [x] Add semantic typography classes (.text-heading, .text-body, .text-caption, .text-error)
- [x] Integrate with existing CSS variables for theme support

## Phase 2: Update Existing Components ✅ PARTIALLY COMPLETED
- [x] Update subscription-plans.component.html to use .container-card and .text-heading
- [x] Update subscription-addons.component.html to use .btn-add, .btn-edit, .btn-delete
- [x] Update plan-card.component.html to use .container-card and .text-heading
- [x] Update subscription-history.component.html to use .container-card and .text-heading
- [ ] Update form inputs across components to use .form-group, .form-label, .form-input

## Phase 3: Create Style Guide Documentation
- [ ] Create style-guide.md with usage examples for all semantic classes
- [ ] Document naming conventions and when to use each class
- [ ] Add examples showing before/after component updates

## Phase 4: Add Specialized Classes
- [ ] Add data display classes (.data-table, .data-list, .data-grid)
- [ ] Add status indicator classes (.status-active, .status-inactive, .status-pending)
- [ ] Add navigation classes (.nav-primary, .nav-secondary)
- [ ] Add utility classes (.flex-center, .flex-between, .spacing-sm/md/lg)
