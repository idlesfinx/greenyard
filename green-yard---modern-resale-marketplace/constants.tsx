
import { Product, Category } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AeroTech Ergonomic Chair',
    category: Category.Furniture,
    price: 450,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
    condition: 'Excellent',
    savedCo2: 24.5,
  },
  {
    id: '2',
    name: 'Zenith Pro Headphones',
    category: Category.Electronics,
    price: 180,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    condition: 'Mint',
    savedCo2: 5.2,
  },
  {
    id: '3',
    name: 'Urban Canvas Backpack',
    category: Category.Fashion,
    price: 85,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    condition: 'Good',
    savedCo2: 3.8,
  },
  {
    id: '4',
    name: 'Carbon X Road Bike',
    category: Category.Outdoors,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop',
    condition: 'Excellent',
    savedCo2: 45.0,
  },
  {
    id: '5',
    name: 'Modernist Walnut Desk',
    category: Category.Furniture,
    price: 670,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop',
    condition: 'Mint',
    savedCo2: 32.1,
  },
  {
    id: '6',
    name: 'Retro Mechanical Keyboard',
    category: Category.Electronics,
    price: 120,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop',
    condition: 'Excellent',
    savedCo2: 1.5,
  },
];
