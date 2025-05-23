import Link from "next/link";

const steps = [
  { name: "Cart", href: "/cart" },
  { name: "Shipping", href: "/checkout/shipping" },
  { name: "Payment", href: "/checkout/payment" },
  { name: "Review", href: "/checkout/review" },
];

export default function CheckoutSteps({ currentStep }: { currentStep: string }) {
  const currentStepIndex = steps.findIndex((step) => step.href === `/checkout/${currentStep}`);

  console.log("currentStep", currentStep);

  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex items-center">
        {steps.map((step, index) => (
          <li key={step.name} className={`relative ${index !== steps.length - 1 ? "pr-8 sm:pr-20" : ""}`}>
            {index < currentStepIndex ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-primary-600 dark:bg-primary-500" />
                </div>
                <Link
                  href={step.href}
                  className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">{step.name}</span>
                </Link>
              </>
            ) : index === currentStepIndex ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div
                  className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary-600 bg-white dark:bg-gray-900"
                  aria-current="step"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-primary-600" />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-transparent" />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
