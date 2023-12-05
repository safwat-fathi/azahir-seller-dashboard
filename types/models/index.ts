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
  id?: string;
  name: string;
  price: number;
  description: string;
  images: string;
  thumbnail: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  stock: number;
  sold?: number;
  discount?: number;
  // reviews: Review[];
  // ratings: Rating[];
  // category: Category[];
  // tags: Tag[];
  // colors: Color[];
  // sizes: Size[];
  // attributes: Attribute[];
  // variants: Variant[];
  // wishlist: Wishlist[];
}
