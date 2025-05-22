"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

export default function SupportTicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          id="firstName"
          label="First Name"
          type="text"
          required
          register={register}
          error={errors.firstName}
        />
        <FormInput
          id="lastName"
          label="Last Name"
          type="text"
          required
          register={register}
          error={errors.lastName}
        />
      </div>

      <FormInput
        id="email"
        label="Email Address"
        type="email"
        required
        register={register}
        error={errors.email}
      />

      <FormInput
        id="orderNumber"
        label="Order Number (if applicable)"
        type="text"
        register={register}
        error={errors.orderNumber}
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Subject
        </label>
        <select
          {...register("subject", { required: true })}
          className={`block w-full py-2 pl-3 pr-10 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.subject
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-700 dark:text-white`}
        >
          <option value="">Select a subject</option>
          <option value="order-issue">Order Issue</option>
          <option value="shipping">Shipping Question</option>
          <option value="returns">Return Question</option>
          <option value="product">Product Question</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-sm text-red-500 dark:text-red-400">
            Please select a subject
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          rows={5}
          {...register("message", { required: true })}
          className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.message
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-700 dark:text-white`}
        />
        {errors.message && (
          <p className="text-sm text-red-500 dark:text-red-400">
            Please enter your message
          </p>
        )}
      </div>

      <div className="pt-4">
        <SubmitButton>Submit Ticket</SubmitButton>
      </div>
    </form>
  );
}
