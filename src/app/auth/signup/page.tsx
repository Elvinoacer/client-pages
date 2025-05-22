"use client";
import AuthFormContainer from "@/components/auth/AuthFormContainer";
import AuthHeader from "@/components/auth/AuthHeader";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <AuthFormContainer>
        <AuthHeader
          title="Create an account"
          subtitle="Get started with your free account"
        />

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput
              id="firstName"
              name="firstName"
              type="text"
              label="First name"
              required
              placeholder="John"
            />

            <FormInput
              id="lastName"
              name="lastName"
              type="text"
              label="Last name"
              required
              placeholder="Doe"
            />
          </div>

          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email address"
            required
            placeholder="your@email.com"
          />

          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            placeholder="••••••••"
          />

          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm password"
            required
            placeholder="••••••••"
          />

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
              required
            />
            <label
              htmlFor="terms"
              className="block ml-2 text-sm text-gray-700 dark:text-gray-300"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>

          <SubmitButton>Create account</SubmitButton>

          <div className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
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
