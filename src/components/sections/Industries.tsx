"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { industries } from "@/data/content";

function IndustryIcon({ name }: { name: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[name];
  if (!Icon) return null;
  return <Icon size={20} className="text-primary" />;
}

export default function Industries() {
  const [active, setActive] = useState(0);
  const item = industries.items[active];

  // Split hierarchy levels for visual badges
  const hierarchyTiers = item.levels.split("→").map((s) => s.trim());

  return (
    <section id="universities" className="section-padding">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block">
            Modular Governance Engine
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {industries.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {industries.sectionSubtitle}
          </p>
        </div>

        {/* Industry tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.items.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                active === i
                  ? "border-primary bg-primary/10 text-primary shadow-sm"
                  : "border-border text-muted hover:text-foreground hover:border-border-strong bg-surface"
              }`}
            >
              <IndustryIcon name={ind.icon} />
              <span className="hidden sm:inline">{ind.title}</span>
              <span className="sm:hidden">{ind.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active industry detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-border bg-surface p-8 md:p-12 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  {item.tagline}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-surface-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* 5-Level Hierarchy Visualizer */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                    Configured Multi-Tier Hierarchy:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {hierarchyTiers.map((tier, idx) => (
                      <div key={tier} className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-background border border-border px-3 py-1.5 text-xs font-mono text-foreground font-medium shadow-xs">
                          <span className="text-primary font-bold">L{idx + 1}:</span> {tier}
                        </span>
                        {idx < hierarchyTiers.length - 1 && (
                          <span className="text-muted font-bold text-xs">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-background/80 p-6 sm:p-8 rounded-2xl border border-border space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted block pb-1 border-b border-border">
                  Tailored Organizational Features:
                </span>
                <ul className="space-y-3.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                        <LucideIcons.Check size={12} className="text-accent" />
                      </div>
                      <span className="text-sm font-medium text-surface-foreground">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
