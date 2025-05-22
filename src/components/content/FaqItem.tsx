"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 dark:text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
