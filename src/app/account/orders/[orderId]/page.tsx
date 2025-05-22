"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import StatusBadge from "@/components/ui-2/StatusBadge";
import Link from "next/link";
import { orders } from "@/lib/constants/account";

export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  const order = orders.find((o) => o.id === params.orderId);

  if (!order) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title={`Order #${order.id}`}
        description={`Placed on ${order.date}`}
        action={<StatusBadge status={order.status} />}
      />

      <div className="grid gap-8 mt-8 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 md:col-span-2">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Order Items
          </h3>
          <div className="mt-4 space-y-6">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex border-b border-gray-200 dark:border-gray-700 pb-6"
              >
                <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col flex-1 ml-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {item.color}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500 dark:text-gray-400">
                      Qty {item.quantity}
                    </p>
                    <p className="font-medium">Kes {item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Order Summary
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Subtotal
                </span>
                <span>Kes {order.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Shipping
                </span>
                <span>Kes {order.shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tax</span>
                <span>Kes {order.tax}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="font-medium">Total</span>
                <span className="font-medium">Kes {order.total}</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Shipping Information
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>{order.shippingAddress.name}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {order.shippingAddress.address}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                {order.shippingAddress.zip}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {order.shippingAddress.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/account/orders"
          className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          ← Back to orders
        </Link>
      </div>
    </motion.div>
  );
}
