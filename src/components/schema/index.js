import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  username: z.string().min(4),
  password: z.string().min(8),
  role: z.string().default("employee"),
});

export const LoginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(8),
});

export const ProductSchema = z.object({
  name: z.string().min(1, "Masukkan nama produk"),
  price: z.number().min(1, "Masukkan harga"),
});

export const CustomerSchema = z.object({
  name: z.string().min(1),
  phoneNumber: z.string().min(1),
  address: z.string().min(1),
});

export const BillSchema = z.object({
  customers: z.string().nonempty("Select Customers"),
  products: z.string().nonempty("Select Products"),
  qty: z.number().min(1),
});
