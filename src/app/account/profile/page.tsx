"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import ProfileForm from "@/components/account/ProfileForm";

export default function ProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        title="Profile Information"
        description="Update your personal details"
      />

      <div className="mt-8">
        <ProfileForm
          defaultValues={{
            name: "John Doe",
            email: "john@example.com",
            phone: "+1 (555) 123-4567",
            gender: "male",
          }}
        />
      </div>
    </motion.div>
  );
}
