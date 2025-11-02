export interface Product {
  id: string;
  title: string;
  price: number;
  image?: string;
  description?: string;
}

export interface Shop {
  id: string;
  name: string;
  sales: number;
  products: Product[];
  avatar?: string;
}

export type Role = "customer" | "seller";

export interface User {
  id: string;
  name: string;
  role: Role;
  points: number;
  purchases: Array<{ productId: string; shopId: string; amount: number; pointsEarned: number; date: string }>;
}
