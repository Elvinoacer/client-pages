"use client";
import SectionHeader from "@/components/ui-2/SectionHeader";
import { addresses, orders } from "@/lib/constants/account";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AccountPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="My Account"
        description="Welcome back! Here's your account overview"
      />

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Orders
          </h3>
          <div className="mt-4 space-y-4">
            {orders.slice(0, 2).map((order) => (
              <div
                key={order.id}
                className="border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-medium">#{order.id}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {order.date}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-sm">Kes {order.total}</span>
                  <span className="text-sm">{order.items.length} items</span>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/account/orders"
            className="inline-block mt-4 text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            View all orders →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Saved Addresses
          </h3>
          <div className="mt-4 space-y-4">
            {addresses.slice(0, 1).map((address) => (
              <div key={address.id} className="text-sm">
                <p className="font-medium">{address.name}</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {address.address}, {address.city}, {address.state}{" "}
                  {address.zip}
                </p>
              </div>
            ))}
          </div>
          <a
            href="/account/addresses"
            className="inline-block mt-4 text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Manage addresses →
          </a>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Account Details
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <p className="font-medium">John Doe</p>
            <p className="text-gray-600 dark:text-gray-400">john@example.com</p>
            <p className="text-gray-600 dark:text-gray-400">
              +1 (555) 123-4567
            </p>
          </div>
          <a
            href="/account/profile"
            className="inline-block mt-4 text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Edit profile →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
