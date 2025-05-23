"use client";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";
import { usePathname } from "next/navigation";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentStep = pathname.split("/").pop();
  const whereNottoshowSteps = ["success", "failed"];
  return (
    <div className="container px-4 py-8 mx-auto">
      {whereNottoshowSteps.some((path) => path.includes(currentStep || "")) ? (
        <></>
      ) : (
        <CheckoutSteps currentStep={currentStep || "cart"} />
      )}

      {children}
    </div>
  );
}
