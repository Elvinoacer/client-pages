"use client";
import AuthFormContainer from "@/components/auth/AuthFormContainer";
import AuthHeader from "@/components/auth/AuthHeader";
import FormInput from "@/components/auth/FormInput";
import SubmitButton from "@/components/auth/SubmitButton";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <AuthFormContainer>
        <AuthHeader
          title="Sign in to your account"
          subtitle="Enter your details below to continue"
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

          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            placeholder="••••••••"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-700 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>

            <Link
              href="/auth/forgot-password"
              className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Forgot password?
            </Link>
          </div>

          <SubmitButton>Sign in</SubmitButton>

          <div className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Sign up
            </Link>
          </div>
        </form>
      </AuthFormContainer>
    </div>
  );
}
