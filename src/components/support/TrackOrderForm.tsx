"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

export default function TrackOrderForm() {
  const [orderStatus, setOrderStatus] = useState<{
    status: string;
    estimatedDelivery: string;
    trackingNumber: string;
    carrier: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Simulate API call to fetch order status
    setOrderStatus({
      status: "Shipped",
      estimatedDelivery: "May 25, 2023",
      trackingNumber: "SH123456789",
      carrier: "FedEx",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          id="orderNumber"
          label="Order Number"
          type="text"
          required
          register={register}
          error={errors.orderNumber}
        />

        <FormInput
          id="email"
          label="Email Address or Phone Number"
          type="text"
          required
          register={register}
          error={errors.email}
        />

        <div className="pt-2">
          <SubmitButton>Track Order</SubmitButton>
        </div>
      </form>

      {orderStatus && (
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Order Status
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Status:</span>
              <span className="font-medium">{orderStatus.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Estimated Delivery:
              </span>
              <span className="font-medium">
                {orderStatus.estimatedDelivery}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Tracking Number:
              </span>
              <span className="font-medium">{orderStatus.trackingNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Carrier:</span>
              <span className="font-medium">{orderStatus.carrier}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
