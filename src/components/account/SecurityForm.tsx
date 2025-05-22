"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

interface SecurityFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function SecurityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SecurityFormValues>();

  const onSubmit = (data: SecurityFormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        id="currentPassword"
        label="Current Password"
        type="password"
        required
        register={register}
        error={errors.currentPassword}
      />

      <FormInput
        id="newPassword"
        label="New Password"
        type="password"
        required
        register={register}
        error={errors.newPassword}
      />

      <FormInput
        id="confirmPassword"
        label="Confirm New Password"
        type="password"
        required
        register={register}
        validate={(value) =>
          value === watch("newPassword") || "Passwords do not match"
        }
        error={errors.confirmPassword}
      />

      <div className="pt-4">
        <SubmitButton>Change Password</SubmitButton>
      </div>
    </form>
  );
}
