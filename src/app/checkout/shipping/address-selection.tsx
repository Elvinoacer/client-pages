"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

function AddressSelection({ addresses }: { addresses: Address[] }) {
  const [selectedAddress, setSelectedAddress] = useState(addresses.find((address) => address.isDefault));
  const router = useRouter();
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {addresses.map((address) => (
        <div
          onClick={() => setSelectedAddress(address)}
          key={address.id}
          className={`p-4 border rounded-lg cursor-pointer ${
            selectedAddress?.id === address.id
              ? "border-primary-500 bg-primary-50 dark:bg-gray-800"
              : "border-gray-300 dark:border-gray-600"
          }`}
        >
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-900 dark:text-white">
              {address.name}
              {address.isDefault && (
                <span className="ml-2 text-xs text-primary-600 dark:text-primary-400">(Default)</span>
              )}
            </h3>
            <button
              onClick={() => router.push(`/account/addresses/${address.id}/edit`)}
              className="text-sm cursor-pointer  text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Edit
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <p>{address.address}</p>
            <p>
              {address.city}, {address.state} {address.zip}
            </p>
            <p>{address.country}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddressSelection;
