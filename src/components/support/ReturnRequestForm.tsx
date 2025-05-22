"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

export default function ReturnRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
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
        label="Email Address"
        type="email"
        required
        register={register}
        error={errors.email}
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Reason for Return
        </label>
        <select
          {...register("reason", { required: true })}
          className={`block w-full py-2 pl-3 pr-10 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.reason
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-700 dark:text-white`}
        >
          <option value="">Select a reason</option>
          <option value="wrong-item">Wrong item received</option>
          <option value="defective">Defective or damaged</option>
          <option value="no-longer-needed">No longer needed</option>
          <option value="better-price-found">Found better price</option>
          <option value="other">Other</option>
        </select>
        {errors.reason && (
          <p className="text-sm text-red-500 dark:text-red-400">
            Please select a reason
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Additional Details
        </label>
        <textarea
          rows={4}
          {...register("details")}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="pt-4">
        <SubmitButton>Submit Return Request</SubmitButton>
      </div>
    </form>
  );
}
