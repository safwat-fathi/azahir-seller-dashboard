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
