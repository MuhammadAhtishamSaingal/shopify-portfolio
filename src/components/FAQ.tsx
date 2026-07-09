"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Will custom Liquid code or custom templates slow down my store?",
    answer: "No. Custom Liquid templates compile natively on Shopify's servers and render instant HTML. This is faster than installing generic Shopify Apps that load heavy third-party JavaScript files that block page rendering.",
  },
  {
    question: "How do you optimize Shopify store speed and Core Web Vitals?",
    answer: "My speed optimization process purges legacy app residues, lazy-loads images, defers non-critical tracking scripts, and sets High Fetch Priority on LCP hero banners to achieve 90+ speeds.",
  },
  {
    question: "Can you migrate our storefront from WooCommerce, Magento, or custom code?",
    answer: "Yes. I manage complete data migrations to Shopify, preserving products, customer logs, order records, and metadata keys while establishing redirect rules to retain Google SEO index rankings.",
  },
  {
    question: "Do you build custom Shopify sections and metafield integrations?",
    answer: "Yes. I construct custom Liquid sections, blocks, metafields, and metaobjects configured to let your team customize layouts directly inside the native theme editor panel without editing code.",
  },
  {
    question: "What is your experience with Shopify Plus and Checkout Extensibility?",
    answer: "I work with Shopify Plus brands to customize checkouts using Checkout Blocks, custom Shopify Functions, and Checkout Extensibility APIs for discounts, attachments, and trust badges.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes. I provide 30 days of complimentary post-launch support to resolve any minor layout issues. I also offer monthly retainer contracts for continuous feature development and CRO testing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "bg-white border-shopify-forest/30 shadow-sm"
                : "bg-white border-gray-border hover:border-charcoal/20"
            }`}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer group text-charcoal"
            >
              <span className={`font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-150 ${
                isOpen ? "text-shopify-forest" : "text-charcoal group-hover:text-shopify-forest"
              }`}>
                {faq.question}
              </span>
              <span className={`p-1.5 rounded-lg transition-colors duration-200 ${
                isOpen ? "bg-shopify-forest/10 text-shopify-forest" : "bg-gray-bg text-charcoal-light group-hover:bg-gray-border"
              }`}>
                {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4.5 pt-1 text-[11px] sm:text-xs text-charcoal-light leading-relaxed border-t border-gray-border bg-gray-bg/20">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
