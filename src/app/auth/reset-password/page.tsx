"use client";
import AuthFormContainer from "@/components/auth/AuthFormContainer";
import AuthHeader from "@/components/auth/AuthHeader";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";

export default function ResetPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <AuthFormContainer>
        <AuthHeader
          title="Set a new password"
          subtitle="Create a strong password to secure your account"
        />

        <form className="mt-8 space-y-6">
          <FormInput
            id="password"
            name="password"
            type="password"
            label="New password"
            required
            placeholder="••••••••"
          />

          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm new password"
            required
            placeholder="••••••••"
          />

          <SubmitButton>Update password</SubmitButton>
        </form>
      </AuthFormContainer>
    </div>
  );
}
