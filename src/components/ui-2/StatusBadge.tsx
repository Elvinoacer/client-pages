export default function StatusBadge({ status }: { status: string }) {
  const statusColors: Record<string, string> = {
    Pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Shipped:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    Delivered:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        statusColors[status] ||
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
      }`}
    >
      {status}
    </span>
  );
}
