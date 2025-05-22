import { StarIcon } from "lucide-react";

export default function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((rating) => (
        <StarIcon
          key={rating}
          className={`h-4 w-4 ${
            rating <= value
              ? "text-yellow-400"
              : "text-gray-300 dark:text-gray-500"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
