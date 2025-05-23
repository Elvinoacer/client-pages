"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "/products" },
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Best Sellers", href: "/best-sellers" },
        { name: "Deals", href: "/deals" },
        { name: "Categories", href: "/categories" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faq" },
        { name: "Shipping Policy", href: "/shipping-policy" },
        { name: "Return Policy", href: "/return-policy" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Account",
      links: [
        { name: "My Account", href: "/account" },
        { name: "Orders", href: "/orders" },
        { name: "Wishlist", href: "/account/wishlist" },
        { name: "Track Order", href: "/track-order" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=100092661322616" },
    { icon: <FaXTwitter className="h-5 w-5" />, href: "https://x.com/Elvinoace" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://ke.linkedin.com/" },
  ];

  return (
    <footer className={`mt-auto   dark:bg-gray-900 dark:text-gray-300 bg-gray-100 text-gray-700  `}>
      <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold dark:text-white text-gray-900`}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      href={link.href}
                      className={`hover:underline dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-gray-900 `}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className={`p-2 rounded-full  dark:bg-gray-800 dark:hover:bg-gray-700 bg-white hover:bg-gray-200 shadow-sm`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <ThemeToggle />
            <p className="text-sm">© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
