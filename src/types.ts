export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  petType: 'Dog' | 'Cat' | 'Bird' | 'Fish' | 'Other';
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  stock: number;
  badge?: 'Best Seller' | 'Trending' | 'New Arrival' | 'Limited Stock' | 'Hot' | 'Sale';
  description: string;
  ingredients?: string;
  feedingGuide?: string;
  reviews?: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export interface Brand {
  name: string;
  logoUrl?: string;
}

export type PageId =
  | 'home'
  | 'shop'
  | 'product-details'
  | 'cart'
  | 'checkout'
  | 'wishlist'
  | 'faq'
  | 'blog'
  | 'blog-details'
  | 'about'
  | 'contact'
  | 'login'
  | 'register';
