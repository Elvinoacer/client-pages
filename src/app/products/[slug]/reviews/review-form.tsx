"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ReviewForm = ({ productId }: { productId: string }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your backend
    // This is a mock implementation
    console.log("Submitting review:", {
      productId,
      rating,
      ...formData,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setRating(0);
    setFormData({ title: "", comment: "" });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div className={`p-6 rounded-xl dark:bg-gray-800 bg-white shadow`}>
      <h2 className="text-xl font-bold mb-4">Write a Review</h2>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-4 p-3 rounded-md
              dark:bg-green-900 dark:text-green-200
              bg-green-100 text-green-800
          `}
        >
          Thank you for your review! It has been submitted successfully.
        </motion.div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2 font-medium">
            Your Rating
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <svg
                  className={`w-8 h-8 ${
                    star <= (hoverRating || rating)
                      ? "dark:text-yellow-400 text-yellow-500"
                      : "dark:text-gray-600 text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
            <span className="ml-2 text-sm">
              {rating > 0
                ? `${rating} star${rating !== 1 ? "s" : ""}`
                : "Select rating"}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-medium">
            Review Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 rounded-md border  dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 bg-white border-gray-300 focus:border-blue-500 `}
            required
            maxLength={100}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2 font-medium">
            Your Review
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-3 py-2 rounded-md border
               dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 bg-white border-gray-300 focus:border-blue-500
            `}
            required
            maxLength={500}
          />
          <p className="text-xs text-right mt-1 text-gray-500">
            {formData.comment.length}/500 characters
          </p>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting || rating === 0}
          className={`w-full py-3 px-4 rounded-md font-medium ${
            isSubmitting || rating === 0
              ? "dark:bg-gray-600 cursor-not-allowed bg-gray-300"
              : "dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Review"
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ReviewForm;
