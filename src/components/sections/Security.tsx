"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { security } from "@/data/content";

function SecurityIcon({ name }: { name: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[name];
  if (!Icon) return null;
  return <Icon size={22} className="text-primary" />;
}

export default function Security() {
  return (
    <section id="security" className="section-padding">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {security.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {security.sectionSubtitle}
          </p>
        </div>

        {/* Security pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {security.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <SecurityIcon name={pillar.icon} />
              </div>
              <h3 className="text-lg font-semibold text-surface-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {security.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary"
            >
              <LucideIcons.ShieldCheck size={14} />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
