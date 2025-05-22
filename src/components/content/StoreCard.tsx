import Image from "next/image";

export default function StoreCard({ store }: { store: any }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {store.name}
      </h3>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        <p>{store.address}</p>
        <p>
          {store.city}, {store.state} {store.postalCode}
        </p>
        <p>{store.country}</p>
      </div>
      <div className="mt-4">
        <p className="text-sm">
          <span className="font-medium">Phone:</span> {store.phone}
        </p>
        {store.email && (
          <p className="text-sm">
            <span className="font-medium">Email:</span> {store.email}
          </p>
        )}
      </div>
      <div className="mt-4 aspect-video relative">
        <Image
          src={store.image || "/store-default.jpg"}
          alt={store.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium">Opening Hours</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {store.openingHours}
        </p>
      </div>
    </div>
  );
}
