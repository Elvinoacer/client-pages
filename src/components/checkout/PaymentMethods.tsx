"use client";

import { useState } from "react";
import { CreditCardIcon, DollarSign } from "lucide-react";

const paymentOptions = [
  {
    id: "credit-card",
    name: "Credit Card",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    id: "mpesa",
    name: "",
    icon: (
      <div className="inline-flex items-center border-2 border-[#00A650] px-4 py-2 rounded-lg">
        <span className="text-[#00A650] font-bold text-lg tracking-wide">MPESA</span>
      </div>
    ),
  },
];

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState(paymentOptions[0].id);
  console.log(selectedMethod);

  return (
    <div className="mt-4 space-y-4">
      {paymentOptions.map((option) => (
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
              id={`payment-${option.id}`}
              name="payment-method"
              checked={selectedMethod === option.id}
              onChange={() => {}}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            />
            <label
              htmlFor={`payment-${option.id}`}
              className="ml-3 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <span className="mr-2">{option.icon}</span>
              {option.name}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
