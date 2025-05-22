"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

export default function ContactForm() {
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
        id="phone"
        label="Phone Number"
        type="tel"
        register={register}
        error={errors.phone}
      />

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Subject
        </label>
        <select
          id="subject"
          {...register("subject")}
          className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option>General Inquiry</option>
          <option>Product Support</option>
          <option>Order Issue</option>
          <option>Returns</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: true })}
          className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
            errors.message
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
        />
        {errors.message && (
          <p className="text-sm text-red-500 dark:text-red-400">
            This field is required
          </p>
        )}
      </div>

      <div className="pt-4">
        <SubmitButton>Send Message</SubmitButton>
      </div>
    </form>
  );
}
