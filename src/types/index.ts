// used in src/app/account/page.tsx

export type Address = {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
};

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
};

export type ShippingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
};

export type Order = {
  id: string;
  date: string;
  status: string;
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
};

export type Review = {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  rating: number;
  date: string;
  comment: string;
};

export type NotificationType = "order" | "feature" | string; // You can make this more specific if types are limited

export type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: NotificationType;
};
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // This could also be a more specific type if you're using a rich text editor (e.g., a custom RichText type)
  author: string;
  publishedAt: string; // Consider using Date or a more specific date-time type if you need to perform date operations
  image: string; // This is the URL or path to the image
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
};

export type ShippingMethod = {
  id: string;
  name: string;
  price: number;
  estimatedDelivery: string;
};

export type PaymentMethod = {
  type: string;
  last4: string;
};

export type OrderItemDetail = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// src/lib/types/products.ts
export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: number;
  basePrice: number;
  offerPrice?: number;
  stock: number;
  color: string;
  variantName: string;
  variantValues: string;
  shortDescription: string;
  keywords: string[];
  purchases: number;
  earnings: number;
  rating: number;
  reviews: number;
  featured: boolean;
  wishlisted: boolean;
  images: string[];
  specs: {
    brand: string;
    connectivity: string | undefined;
    batteryLife: string;
    noiseCancellation: boolean;
    weight: string;
  };
};
