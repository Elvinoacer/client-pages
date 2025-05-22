"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui-2/SectionHeader";
import AddressCard from "@/components/account/AddressCard";
import { addresses } from "@/lib/constants/account";

export default function AddressesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="My Addresses"
        description="Manage your shipping addresses"
        action={
          <Link
            href="/account/addresses/new"
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
          >
            Add New Address
          </Link>
        }
      />

      <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {addresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>
    </motion.div>
  );
}
