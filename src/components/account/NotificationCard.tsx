export default function NotificationCard({
  notification,
}: {
  notification: any;
}) {
  return (
    <div
      className={`p-4 rounded-lg ${
        notification.read
          ? "bg-gray-50 dark:bg-gray-800"
          : "bg-white shadow-md dark:bg-gray-700"
      }`}
    >
      <div className="flex justify-between">
        <h4 className="font-medium text-gray-900 dark:text-white">
          {notification.title}
        </h4>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {notification.date}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {notification.message}
      </p>
      {!notification.read && (
        <div className="inline-block mt-2 w-2 h-2 rounded-full bg-primary-600"></div>
      )}
    </div>
  );
}
