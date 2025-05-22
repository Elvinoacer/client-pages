import Rating from "@/components/ui-2/Rating";

export default function ReviewCard({ review }: { review: any }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
          <img
            src={review.productImage}
            alt={review.productName}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-medium text-gray-900 dark:text-white">
            {review.productName}
          </h4>
          <div className="flex items-center mt-1">
            <Rating value={review.rating} />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              {review.date}
            </span>
          </div>
          {review.comment && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {review.comment}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
