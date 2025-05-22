"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

interface ProfileFormValues {
  name: string;
  email: string;
  phone: string;
  gender: string;
}

export default function ProfileForm({
  defaultValues,
}: {
  defaultValues: ProfileFormValues;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues,
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          id="name"
          label="Full Name"
          type="text"
          required
          register={register}
          error={errors.name}
        />
        <FormInput
          id="email"
          label="Email Address"
          type="email"
          required
          register={register}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          id="phone"
          label="Phone Number"
          type="tel"
          register={register}
          error={errors.phone}
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Gender
          </label>
          <select
            {...register("gender")}
            className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div className="pt-4">
        <SubmitButton>Update Profile</SubmitButton>
      </div>
    </form>
  );
}
