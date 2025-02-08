// utility/menuItems.ts
export interface MenuItem {
  name: string;
  path: string;
  icon: string; // Store icon name as a string
}

export const menuItems: MenuItem[] = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'About', path: '/about', icon: 'info' },
  { name: 'Services', path: '/services', icon: 'services' },
  { name: 'Contact', path: '/contact', icon: 'contact' },
];
