"use client";
import { motion } from "framer-motion";
import SupportCard from "@/components/support/SupportCard";
import { supportOptions } from "@/lib/constants/supportOptions";
import SupportTicketForm from "@/components/support/SupportTicketForm";

export default function SupportPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Customer Support
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          How can we help you today?
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportOptions.map((option) => (
            <SupportCard
              key={option.id}
              title={option.title}
              description={option.description}
              icon={option.icon}
              link={option.link}
            />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Contact Our Support Team
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Can&apos;t find what you&apos;re looking for? Send us a message.
          </p>
          <div className="mt-6">
            <SupportTicketForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
