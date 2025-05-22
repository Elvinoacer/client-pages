"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function ProductImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="overflow-hidden rounded-lg aspect-square">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Product view ${currentIndex + 1}`}
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        </>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex mt-4 space-x-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-16 overflow-hidden rounded-md border-2 ${
                currentIndex === index
                  ? "border-primary-600 dark:border-primary-400"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
