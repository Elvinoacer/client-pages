import { testimonials } from "@/lib/constants/testimonials";

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        What our customers say
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Don&apos;t just take our word for it
      </p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-3 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
