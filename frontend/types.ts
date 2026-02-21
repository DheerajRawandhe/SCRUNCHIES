export interface Product {
  id: string;
  name: string;
  price: string | number;
  image: string;
  category: string;
  isNew?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: string | number;
  image: string;
  category: string;
  quantity: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
}
