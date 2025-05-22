"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import SecurityForm from "@/components/account/SecurityForm";

export default function SecurityPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="Security Settings"
        description="Manage your password and account security"
      />

      <div className="mt-8">
        <SecurityForm />
      </div>
    </motion.div>
  );
}
