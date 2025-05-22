"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import NotificationCard from "@/components/account/NotificationCard";
import { notifications } from "@/lib/constants/account";

export default function NotificationsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="Notifications"
        description="Your recent alerts and messages"
      />

      <div className="mt-8 space-y-4">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </motion.div>
  );
}
