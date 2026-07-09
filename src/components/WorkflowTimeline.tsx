"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Layers3, Zap, ShieldAlert, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Store Audit",
    desc: "Detailed analysis of current speed indices, mobile conversion barriers, and checkout bottlenecks to pinpoint high-impact fixes.",
    icon: Search,
    color: "#008060"
  },
  {
    num: "02",
    title: "Design Planning",
    desc: "Crafting modern, high-fidelity UI styling frames customized specifically for DTC buyers, with mobile-first checkout flows.",
    icon: PenTool,
    color: "#95BF47"
  },
  {
    num: "03",
    title: "Shopify Theme Development",
    desc: "Coding a clean, lightweight Shopify theme from scratch using Liquid and Tailwind CSS. Built without slow visual editors or heavy app dependencies.",
    icon: Code2,
    color: "#202223"
  },
  {
    num: "04",
    title: "Custom Sections & Liquid",
    desc: "Programming customizable schema sections that integrate natively with the Shopify Customizer for easy drag-and-drop store management.",
    icon: Layers3,
    color: "#008060"
  },
  {
    num: "05",
    title: "Speed Optimization",
    desc: "Purging unused app residues, lazy-loading media files, and setting asset fetch priorities to consistently hit 90+ Lighthouse speed scores.",
    icon: Zap,
    color: "#95BF47"
  },
  {
    num: "06",
    title: "Testing & QA",
    desc: "Rigorous responsive QA testing across Chrome, Safari, Firefox, iOS, and Android devices to guarantee a pixel-perfect shopper experience.",
    icon: ShieldAlert,
    color: "#202223"
  },
  {
    num: "07",
    title: "Launch & Support",
    desc: "Seamless domain transfer, DNS setup, analytics integration, and 30 days of direct developer support to ensure absolute launch stability.",
    icon: Rocket,
    color: "#008060"
  }
];

export default function WorkflowTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-8">
      {/* Central line for desktop / left line for mobile */}
      <div className="absolute left-[30px] lg:left-1/2 top-4 bottom-4 w-[2px] bg-gray-border transform lg:-translate-x-1/2" />

      <div className="space-y-12 lg:space-y-16">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col lg:flex-row items-start ${
                isEven ? "lg:flex-row-reverse" : ""
              } w-full`}
            >
              {/* Central Indicator Node */}
              <div className="absolute left-[16px] lg:left-1/2 top-2 transform lg:-translate-x-1/2 z-10 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full border-2 border-shopify-forest bg-white flex items-center justify-center shadow-sm"
                  style={{ borderColor: step.color }}
                >
                  <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: step.color }} />
                </motion.div>
              </div>

              {/* Text Card Side */}
              <div className="w-full lg:w-1/2 pl-14 lg:pl-0 lg:px-8">
                <div
                  className={`p-6 rounded-2xl border border-gray-border bg-white shadow-sm hover:shadow-md hover:border-shopify-forest/20 transition-all duration-300 ${
                    isEven ? "text-left lg:text-right" : "text-left"
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-2.5 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                    <span
                      className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider"
                      style={{ color: step.color }}
                    >
                      Step {step.num}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-light text-xs leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Spacing node for symmetric desktop view */}
              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
