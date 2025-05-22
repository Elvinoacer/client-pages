export const addresses = [
  {
    id: "1",
    name: "John Doe",
    phone: "+1 (555) 123-4567",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    isDefault: true,
  },
  {
    id: "2",
    name: "John Doe",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Ave",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    country: "United States",
    isDefault: false,
  },
];

export const orders = [
  {
    id: "ORD-12345",
    date: "May 15, 2023",
    status: "Delivered",
    total: 249.99,
    subtotal: 229.99,
    shipping: 15.0,
    tax: 5.0,
    // items: 1,
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 (555) 123-4567",
    },
    items: [
      {
        id: "1",
        name: "Premium Wireless Headphones",
        price: 229.99,
        quantity: 1,
        color: "Black",
        image: "/products/headphones-1.jpg",
      },
    ],
  },
  // Add more orders as needed
];

export const reviews = [
  {
    id: "1",
    productId: "1",
    productName: "Premium Wireless Headphones",
    productImage: "/products/headphones-1.jpg",
    rating: 5,
    date: "May 20, 2023",
    comment:
      "Excellent sound quality and very comfortable to wear for long periods.",
  },
  // Add more reviews as needed
];

export const notifications = [
  {
    id: "1",
    title: "Order Shipped",
    message: "Your order #ORD-12345 has been shipped.",
    date: "May 16, 2023",
    read: true,
    type: "order",
  },
  {
    id: "2",
    title: "New Feature Available",
    message: "Check out our new wishlist feature!",
    date: "May 10, 2023",
    read: false,
    type: "feature",
  },
  // Add more notifications as needed
];
