"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  {
    name: "Elvin",
    portrait:
      "https://portraitpal.ai/wp-content/uploads/2024/08/corporate-headshot.jpg",
  },
  {
    name: "Jackson",
    portrait:
      "https://images.stockcake.com/public/4/2/2/422fc816-8321-41bc-8769-f6a52fe94f55_large/professional-studio-portrait-stockcake.jpg",
  },
  {
    name: "Bramwel",
    portrait:
      "https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=",
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          About Us
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <Image
              src="https://www.randrmagonline.com/ext/resources/2021/03/30/1-RR0421-Cline-high-performing-team-members-900x550.jpg?1617115896"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Story
            </h2>
            <p>
              Founded in 2010, our company started as a small passion project in
              a garage. Today, we&apos;re proud to serve thousands of customers
              worldwide with high-quality products and exceptional service.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p>
              We believe in making premium products accessible to everyone while
              maintaining ethical manufacturing practices and sustainable
              business operations.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Values
            </h2>
            <ul>
              <li>Customer satisfaction above all</li>
              <li>Innovation through technology</li>
              <li>Sustainable business practices</li>
              <li>Transparency in everything we do</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Meet The Team
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.portrait}
                    alt={`${member.name}`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Position</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
