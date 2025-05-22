"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner({ banners }: { banners: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative h-[80vh] max-h-[800px] min-h-[500px] w-full overflow-hidden">
      {banners.map((banner, index) => (
        <motion.div
          key={banner.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={banner.imageUrl}
            alt={banner.title}
            fill
            className="object-cover"
            priority
          />

          {/* Enhanced gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          <div className="container relative h-full flex items-center px-4">
            <div className="max-w-2xl text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold sm:text-5xl md:text-6xl drop-shadow-lg"
              >
                {banner.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-lg sm:text-xl drop-shadow-md"
              >
                {banner.description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  href={banner.url}
                  className="inline-block px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Enhanced pagination with cool hover effect */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {banners.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
