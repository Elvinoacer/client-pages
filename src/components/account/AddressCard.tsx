import Link from "next/link";

export default function AddressCard({ address }: { address: any }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
      <div className="flex justify-between">
        <h4 className="font-medium text-gray-900 dark:text-white">
          {address.name}
          {address.isDefault && (
            <span className="ml-2 px-2 py-1 text-xs font-medium text-primary-800 bg-primary-100 rounded-full dark:text-primary-200 dark:bg-primary-900">
              Default
            </span>
          )}
        </h4>
        <div className="flex space-x-2">
          <Link
            href={`/account/addresses/${address.id}/edit`}
            className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Edit
          </Link>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        <p>{address.address}</p>
        <p>
          {address.city}, {address.state} {address.zip}
        </p>
        <p>{address.country}</p>
        <p className="mt-1">{address.phone}</p>
      </div>
    </div>
  );
}
