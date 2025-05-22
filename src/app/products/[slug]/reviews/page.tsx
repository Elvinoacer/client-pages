"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import ReviewForm from "./review-form";

const ReviewsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);

  // Mock product data - replace with your actual data fetching
  const product = {
    id: slug,
    name: "Premium Wireless Headphones",
    image: "/headphones.jpg",
    averageRating: 4.2,
    reviewCount: 128,
  };

  // Mock reviews data - replace with your actual data fetching
  const reviews = [
    {
      id: 1,
      user: "Alex Johnson",
      rating: 5,
      date: "2023-10-15",
      title: "Amazing sound quality",
      comment:
        "These headphones exceeded my expectations. The noise cancellation is incredible and the battery life is as advertised.",
    },
    {
      id: 2,
      user: "Sam Wilson",
      rating: 4,
      date: "2023-09-28",
      title: "Great value for money",
      comment:
        "Very comfortable to wear for long periods. Sound is crisp and clear. Only minor complaint is the touch controls can be sensitive.",
    },
    {
      id: 3,
      user: "Taylor Smith",
      rating: 3,
      date: "2023-09-10",
      title: "Good but not perfect",
      comment:
        "Sound quality is good but the bass could be better. Comfortable for the first few hours but then starts to feel heavy.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-gray-100 bg-gray-50 text-gray-900`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className={`
                    dark:text-blue-400 dark:hover:text-blue-300 text-blue-600 hover:text-blue-500`}
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link
                href={`/products/${product.id}`}
                className={`
                     dark:text-blue-400 dark:hover:text-blue-300
                     "text-blue-600 hover:text-blue-500
                `}
              >
                {product.name}
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500">Reviews</li>
          </ol>
        </nav>

        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 p-6 rounded-xl
            dark:bg-gray-800 bg-white shadow`}
        >
          <div className="w-24 h-24 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-2">
              <StarRating rating={product.averageRating} />
              <span className="ml-2 text-sm">
                {product.averageRating.toFixed(1)} ({product.reviewCount}{" "}
                reviews)
              </span>
            </div>
            <Link
              href={`/products/${product.id}`}
              className={`text-sm 
                   dark:text-blue-400 dark:hover:text-blue-300
                   text-blue-600 hover:text-blue-500
              `}
            >
              ← Back to product details
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ReviewForm productId={product.id} />
            </motion.div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Customer Reviews</h2>
                <div className="flex items-center">
                  <span className="mr-2">Sort by:</span>
                  <select
                    className={`px-3 py-1 rounded-md
                         dark:bg-gray-700 dark:border-gray-600
                        bg-white border-gray-300
                    border`}
                  >
                    <option>Most Recent</option>
                    <option>Highest Rating</option>
                    <option>Lowest Rating</option>
                  </select>
                </div>
              </div>

              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      variants={itemVariants}
                      className={`p-6 rounded-xl dark:bg-gray-800 bg-white shadow`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{review.title}</h3>
                          <p className="text-sm text-gray-500">{review.user}</p>
                        </div>
                        <div className="flex items-center">
                          <StarRating rating={review.rating} />
                          <span className="ml-2 text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                      <p
                        className={`
                           dark:text-gray-300 text-gray-700`}
                      >
                        {review.comment}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  variants={itemVariants}
                  className={`p-8 text-center rounded-xl 
                    dark:bg-gray-800 bg-white shadow`}
                >
                  <p className="text-lg">
                    No reviews yet. Be the first to review this product!
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Star Rating Component
const StarRating = ({
  rating,
  interactive = false,
  onRatingChange,
}: {
  rating: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}) => {
  const handleClick = (selectedRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : "button"}
          onClick={() => handleClick(star)}
          className={`${
            interactive ? "cursor-pointer" : "cursor-default"
          } focus:outline-none`}
          disabled={!interactive}
        >
          <svg
            className={`w-5 h-5 ${
              star <= Math.round(rating)
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
    </div>
  );
};

export default ReviewsPage;
