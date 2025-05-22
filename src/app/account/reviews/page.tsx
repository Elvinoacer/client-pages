"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import ReviewCard from "@/components/account/ReviewCard";
import { reviews } from "@/lib/constants/account";

export default function ReviewsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="My Reviews"
        description="Products you've reviewed"
      />

      <div className="mt-8 space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </motion.div>
  );
}
