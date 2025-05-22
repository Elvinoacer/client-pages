"use client";

import { useState } from "react";

const shippingOptions = [
  {
    id: "standard",
    name: "Standard Shipping",
    price: 5.99,
    estimatedDelivery: "3-5 business days",
  },
  {
    id: "express",
    name: "Express Shipping",
    price: 12.99,
    estimatedDelivery: "1-2 business days",
  },
  {
    id: "priority",
    name: "Priority Shipping",
    price: 19.99,
    estimatedDelivery: "1 business day",
  },
];

export default function ShippingMethods() {
  const [selectedMethod, setSelectedMethod] = useState(shippingOptions[0].id);

  return (
    <div className="mt-4 space-y-4">
      {shippingOptions.map((option) => (
        <div
          key={option.id}
          onClick={() => setSelectedMethod(option.id)}
          className={`p-4 border rounded-lg cursor-pointer ${
            selectedMethod === option.id
              ? "border-primary-500 bg-primary-50 dark:bg-gray-800"
              : "border-gray-300 dark:border-gray-600"
          }`}
        >
          <div className="flex items-center">
            <input
              type="radio"
              id={`shipping-${option.id}`}
              name="shipping-method"
              checked={selectedMethod === option.id}
              onChange={() => {}}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            />
            <label
              htmlFor={`shipping-${option.id}`}
              className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {option.name} • Kes {option.price}
            </label>
          </div>
          <p className="mt-1 ml-7 text-sm text-gray-500 dark:text-gray-400">
            {option.estimatedDelivery}
          </p>
        </div>
      ))}
    </div>
  );
}
