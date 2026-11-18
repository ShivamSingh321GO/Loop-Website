"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-surface-foreground">
            {howItWorks.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {howItWorks.sectionSubtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-5xl font-black gradient-text mb-4">
                {step.step}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-surface-foreground mb-2">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

