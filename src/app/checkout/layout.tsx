import CheckoutSteps from "@/components/checkout/CheckoutSteps";

export default function CheckoutLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { step: string };
}) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <CheckoutSteps currentStep={params.step || "cart"} />
      {children}
    </div>
  );
}
