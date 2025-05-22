"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/account" },
  { name: "Profile", href: "/account/profile" },
  { name: "Addresses", href: "/account/addresses" },
  { name: "Orders", href: "/account/orders" },
  { name: "Wishlist", href: "/account/wishlist" },
  { name: "Reviews", href: "/account/reviews" },
  { name: "Notifications", href: "/account/notifications" },
  { name: "Security", href: "/account/security" },
];

export default function AccountNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu when path changes (on mobile)
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth >= 768) return;

      const target = event.target as HTMLElement;

      // Check if click is outside both nav and button
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center justify-between w-full p-4 mb-4 text-gray-700 bg-gray-100 rounded-md md:hidden dark:bg-gray-800 dark:text-gray-300"
      >
        <span>Account Menu</span>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation */}
      <nav
        ref={navRef}
        className={`${isOpen ? "block" : "hidden"} md:block space-y-1`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block px-4 py-2 text-sm font-medium rounded-md ${
              pathname === item.href
                ? "bg-primary-50 text-primary-700 dark:bg-gray-700 dark:text-primary-400"
                : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
