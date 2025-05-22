"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import AddressForm from "@/components/account/AddressForm";
import Link from "next/link";

export default function NewAddressPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="Add New Address"
        description="Fill in the details for your new shipping address"
      />

      <div className="mt-8">
        <AddressForm />
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
