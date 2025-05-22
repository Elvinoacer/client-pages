export const cartItems = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 249.99,
    quantity: 1,
    color: "Black",
    image: "/products/headphones-1.jpg",
  },
  {
    id: "2",
    name: "Ultra HD Smart TV",
    price: 1099.99,
    quantity: 1,
    color: "Black",
    image: "/products/tv-1.jpg",
  },
];

export const shippingMethod = {
  id: "standard",
  name: "Standard Shipping",
  price: 5.99,
  estimatedDelivery: "May 20 - May 24",
};

export const paymentMethod = {
  type: "Visa",
  last4: "4242",
};

export const order = {
  id: "ORD-12345",
  date: "May 15, 2023",
  status: "Processing",
  total: 1355.97,
  items: [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 249.99,
      quantity: 1,
    },
    {
      id: "2",
      name: "Ultra HD Smart TV",
      price: 1099.99,
      quantity: 1,
    },
  ],
};
