"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import AddressForm from "@/components/account/AddressForm";
import Link from "next/link";
import { addresses } from "@/lib/constants/account";
import React from "react";

export default function EditAddressPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const address = addresses.find((a) => a.id === id);
  console.log(address);
  if (!address) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="Edit Address"
        description="Update your shipping address details"
      />

      <div className="mt-8">
        <AddressForm defaultValues={address} />
      </div>

      <div className="mt-6">
        <Link
          href="/account/addresses"
          className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          ← Back to addresses
        </Link>
      </div>
    </motion.div>
  );
}
