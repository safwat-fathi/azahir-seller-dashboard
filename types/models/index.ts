export type TRole = "admin" | "staff";
export type TStatus = "active" | "inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: TRole;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  token: string;
  avatar: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Product {
  _id: string;
  name: string;
  brand: string;
  description: string;
  slug: string;
  price: number;
  stock: number;
  rating: number;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  categories: string[];
}
