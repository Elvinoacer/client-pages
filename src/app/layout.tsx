import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers";
import Layout from "@/components/common/Layout";

const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx or page-specific files
export const metadata = {
  title: "ShopEase | Kenya's Leading Online Store for Electronics, Fashion & Home Goods",
  description:
    "Discover Kenya's best online shopping experience with ShopEase. Enjoy fast delivery, secure payments, and unbeatable prices on electronics, fashion, home appliances, and more. Shop now!",
  keywords: [
    "online shopping Kenya",
    "buy electronics Nairobi",
    "affordable fashion Kenya",
    "home delivery shopping",
    "best e-commerce Kenya",
  ],

  openGraph: {
    title: "ShopEase | Kenya's #1 Online Shopping Destination",
    description:
      "Your one-stop shop for the latest gadgets, trendy fashion, and home essentials in Kenya. Free delivery on orders over KES 2,000!",
    url: "https://client-pages.vercel.app",
    images: [
      {
        url: "https://client-pages.vercel.app/banners/client-banner.png",
        width: 1200,
        height: 630,
        alt: "ShopEase - Premium Online Shopping",
      },
    ],
    siteName: "ShopEase",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopEase | Kenya's Favourite Online Store",
    description:
      "🚀 Fast delivery, secure payments, and millions of products. Shop now at Kenya's best e-commerce platform!",
    images: ["https://client-pages.vercel.app/banners/client-banner.png"],
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/banners/client-banner.png",
        href: "/banners/client-banner.png",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/banners/client-banner.png",
        href: "/banners/client-banner.png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
