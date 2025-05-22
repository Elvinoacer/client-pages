import {
  QuestionMarkCircleIcon,
  TruckIcon,
  ArrowPathIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const supportOptions: {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}[] = [
  {
    id: "1",
    title: "FAQs",
    description: "Find answers to common questions",
    icon: <QuestionMarkCircleIcon className="w-6 h-6" />,
    link: "/faq",
  },
  {
    id: "2",
    title: "Track Order",
    description: "Check your order status",
    icon: <TruckIcon className="w-6 h-6" />,
    link: "/track-order",
  },
  {
    id: "3",
    title: "Returns & Refunds",
    description: "Start a return or check refund status",
    icon: <ArrowPathIcon className="w-6 h-6" />,
    link: "/return-policy",
  },
  {
    id: "4",
    title: "Payment Issues",
    description: "Problems with payments or charges",
    icon: <CreditCardIcon className="w-6 h-6" />,
    link: "/support/payment",
  },
  {
    id: "5",
    title: "Contact Us",
    description: "Phone, email, and live chat options",
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    link: "/contact",
  },
];
