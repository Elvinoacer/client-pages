import Link from "next/link";
import StatusBadge from "@/components/ui-2/StatusBadge";

export default function OrderCard({ order }: { order: any }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">
            Order #{order.id}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {order.date} • {order.items.length} item
            {order.items.length > 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center mt-2 sm:mt-0">
          <StatusBadge status={order.status} />
          <span className="ml-4 font-medium">Kes {order.total}</span>
        </div>
      </div>
      <div className="mt-4">
        <Link
          href={`/account/orders/${order.id}`}
          className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
