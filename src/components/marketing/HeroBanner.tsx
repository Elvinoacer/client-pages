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
          <Image src={banner.imageUrl} alt={banner.title} fill className="object-cover" priority />

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
                  className="relative inline-block px-8 py-3.5 text-lg font-semibold text-white rounded-lg overflow-hidden group"
                >
                  {/* Radial gradient background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-700 group-hover:to-blue-600 transition-all duration-500 rounded-lg"></span>

                  {/* Glow effect */}
                  <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 animate-pulse"></span>

                  {/* Pulsing ring animation */}
                  <span className="absolute inset-0 border-2 border-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-active:border-blue-300 group-active:scale-95"></span>

                  {/* Button content with animation */}
                  <span className="relative flex items-center justify-center gap-2">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Shop Now</span>
                    <svg
                      className="w-5 h-5 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
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
