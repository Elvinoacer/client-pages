import Link from "next/link";

function CheckoutButtons({
  hrefs,
  undoText,
  continueText,
}: {
  hrefs: string[];
  undoText: string;
  continueText: string;
}) {
  return (
    <div className="mt-8 flex justify-end items-center gap-4">
      <Link
        href={hrefs[0]}
        className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {undoText}
      </Link>
      <Link
        href={hrefs[1]}
        className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:from-blue-500 dark:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {continueText}
      </Link>
    </div>
  );
}

export default CheckoutButtons;
