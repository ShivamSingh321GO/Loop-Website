"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { features } from "@/data/content";

// Dynamically resolve Lucide icon by name
function FeatureIcon({ name }: { name: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[name];
  if (!Icon) return null;
  return <Icon size={22} className="text-primary" />;
}

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {features.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {features.sectionSubtitle}
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-primary/30 transition-all hover:shadow-lg"
            >
              {/* Icon */}
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FeatureIcon name={feature.icon} />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-surface-foreground mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
