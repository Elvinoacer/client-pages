export default function CartSummary({ items }: { items: any[] }) {
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
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Subtotal
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Shipping
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Tax</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {tax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Total
          </span>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Kes {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
