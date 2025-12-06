export interface Addon {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  interval: 'month' | 'year';
  enabled: boolean;
  category?: string;
  features?: string[];
}

export interface AddonSelection {
  addon: Addon;
  selected: boolean;
}
