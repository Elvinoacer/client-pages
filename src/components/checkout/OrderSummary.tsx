export default function OrderSummary({
  items,
  showCheckoutButton = true,
}: {
  items: any[];
  showCheckoutButton?: boolean;
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Qty: {item.quantity}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Kes {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Subtotal
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            kes {subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Shipping
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Kes {shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Tax</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Kes {tax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Total
          </span>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Kes {total.toFixed(2)}
          </span>
        </div>
      </div>

      {showCheckoutButton && (
        <div className="mt-6">
          <button
            type="button"
            className="w-full px-4 py-3 text-base font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
