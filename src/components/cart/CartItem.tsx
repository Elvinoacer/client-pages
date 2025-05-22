"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function CartItem({ item }: { item: any }) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex p-4 border rounded-lg dark:border-gray-700"
    >
      <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 ml-4">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            {item.name}
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {item.color}
        </p>

        <div className="flex items-end justify-between flex-1 text-sm">
          <div className="flex items-center">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 text-gray-500 border rounded-l-md dark:border-gray-600"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b dark:border-gray-600">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 text-gray-500 border rounded-r-md dark:border-gray-600"
            >
              +
            </button>
          </div>

          <p className="font-medium">Kes {item.price * quantity}</p>
        </div>
      </div>
    </motion.div>
  );
}
