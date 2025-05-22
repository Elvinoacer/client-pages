// src/app/account/layout.tsx
import AccountNav from "@/components/account/AccountNav";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <AccountNav />
        </div>
        <div className="md:col-span-3">
          <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
