import Link from "next/link";

interface SupportCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export default function SupportCard({
  title,
  description,
  icon,
  link,
}: SupportCardProps) {
  return (
    <Link
      href={link}
      className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow dark:border-gray-700"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 p-3 rounded-full bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
