import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <Link
              href={item.href}
              className={`text-sm font-medium ${
                index === items.length - 1
                  ? "text-gray-500 dark:text-gray-400"
                  : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
