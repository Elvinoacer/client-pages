"use client";
import AuthFormContainer from "@/components/auth/AuthFormContainer";
import AuthHeader from "@/components/auth/AuthHeader";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <AuthFormContainer>
        <AuthHeader
          title="Verify your email"
          subtitle="We've sent a verification link to your email"
        />

        <div className="mt-8 space-y-6 text-center">
          <div className="p-4 mx-auto text-green-700 bg-green-100 rounded-md dark:bg-green-900 dark:text-green-200 max-w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="mt-2">Verification email sent successfully!</p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Didn't receive the email?{" "}
            <button className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              Resend verification
            </button>
          </p>

          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/auth/signin"
              className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </AuthFormContainer>
    </div>
  );
}
