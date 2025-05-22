"use client";
import AuthFormContainer from "@/components/auth/AuthFormContainer";
import AuthHeader from "@/components/auth/AuthHeader";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <AuthFormContainer>
        <AuthHeader
          title="Reset your password"
          subtitle="Enter your email to receive a reset link"
        />

        <form className="mt-8 space-y-6">
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email address"
            required
            placeholder="your@email.com"
          />

          <SubmitButton>Send reset link</SubmitButton>

          <div className="text-sm text-center text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Sign in
            </Link>
          </div>
        </form>
      </AuthFormContainer>
    </div>
  );
}
