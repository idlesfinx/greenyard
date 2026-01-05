
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  condition: 'Mint' | 'Excellent' | 'Good';
  savedCo2: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum Category {
  Electronics = 'Electronics',
  Furniture = 'Furniture',
  Fashion = 'Fashion',
  Outdoors = 'Outdoors',
}
