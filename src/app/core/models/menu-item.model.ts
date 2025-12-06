export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
  isActive?: boolean;
  enabled?: boolean;
  order?: number;
}

export interface AppConfig {
  menuItems: MenuItem[];
  companyName: string;
  companyLogo: string;
}
