import { Product } from "@/types/models";
import * as yup from "yup";

export const addProductSchema: yup.ObjectSchema<Product> = yup.object().shape({
  id: yup.string(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  deletedAt: yup.date(),
  sold: yup.number(),
  discount: yup.number(),
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be positive"),
  stock: yup
    .number()
    .required("Stock is required")
    .positive("Stock must be positive"),
  description: yup.string().required("Description is required"),
  images: yup.string().required("Images is required"),
  thumbnail: yup.string().required("Thumbnail is required"),
});
