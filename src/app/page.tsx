"use client";

import { motion } from "framer-motion";
import HeroBanner from "@/components/marketing/HeroBanner";
import MarqueeOffers from "@/components/marketing/MarqueeOffers";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import CategoryGrid from "@/components/marketing/CategoryGrid";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";
import Testimonials from "@/components/marketing/Testimonials";
import { heroBanners } from "@/lib/constants/heroBanners";
import { bestDeals } from "@/lib/constants/bestDeals";
import { newArrivals } from "@/lib/constants/newArrivals";
import { bestSellers } from "@/lib/constants/bestSellers";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Banner */}
      <HeroBanner banners={heroBanners} />

      {/* Marquee Offers */}
      <MarqueeOffers />

      {/* Best Deals Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto"
      >
        <ProductShowcase
          title="Best Deals"
          subtitle="Limited-time offers you don't want to miss"
          products={bestDeals}
          ctaText="View All Deals"
          ctaLink="/deals"
        />
      </motion.section>

      {/* New Arrivals Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container px-4 mx-auto"
      >
        <ProductShowcase
          title="New Arrivals"
          subtitle="Discover our latest products"
          products={newArrivals}
          ctaText="View All New Arrivals"
          ctaLink="/new-arrivals"
        />
      </motion.section>

      {/* Category Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container px-4 mx-auto"
      >
        <CategoryGrid />
      </motion.section>

      {/* Best Sellers Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container px-4 mx-auto"
      >
        <ProductShowcase
          title="Best Sellers"
          subtitle="Our most popular products"
          products={bestSellers}
          ctaText="View All Best Sellers"
          ctaLink="/best-sellers"
        />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container px-4 mx-auto"
      >
        <Testimonials />
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container px-4 mx-auto"
      >
        <NewsletterSignup />
      </motion.section>
    </div>
  );
}
