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
];

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState(paymentOptions[0].id);

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

          {selectedMethod === option.id && option.id === "credit-card" && (
            <div className="mt-4 ml-7 space-y-4">
              <div>
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Expiration date
                  </label>
                  <input
                    type="text"
                    id="expiration-date"
                    name="expiration-date"
                    placeholder="MM/YY"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    placeholder="123"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
