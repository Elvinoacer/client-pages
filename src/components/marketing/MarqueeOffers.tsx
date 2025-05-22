import { motion } from "framer-motion";
import { marqueeOffers } from "@/lib/constants/marqueeOffers";

export default function MarqueeOffers() {
  return (
    <div className="bg-primary-600 dark:bg-primary-700 text-white py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...marqueeOffers, ...marqueeOffers].map((offer, index) => (
          <div
            key={`${offer.id}-${index}`}
            className="inline-flex items-center mx-8"
          >
            <span className="text-sm font-medium sm:text-base">
              {offer.title}
            </span>
            {offer.url && (
              <a
                href={offer.url}
                className="ml-2 text-xs underline sm:text-sm hover:text-primary-200"
              >
                Learn more
              </a>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
