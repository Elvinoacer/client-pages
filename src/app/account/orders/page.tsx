"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import OrderCard from "@/components/account/OrderCard";
import { orders } from "@/lib/constants/account";

export default function OrdersPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader title="My Orders" description="View your order history" />

      <div className="mt-8 space-y-6">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </motion.div>
  );
}
