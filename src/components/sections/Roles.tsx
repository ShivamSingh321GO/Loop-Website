"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { roles } from "@/data/content";

function RoleIcon({ name }: { name: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[name];
  if (!Icon) return null;
  return <Icon size={18} />;
}

export default function Roles() {
  const [active, setActive] = useState(0);
  const role = roles.items[active];

  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-surface-foreground">
            {roles.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {roles.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-6">
          {/* Role list (sidebar) */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {roles.items.map((r, i) => (
              <button
                key={r.role}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium whitespace-nowrap transition-all ${
                  active === i
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted hover:text-foreground hover:bg-background border border-transparent"
                }`}
              >
                <RoleIcon name={r.icon} />
                {r.role}
              </button>
            ))}
          </div>

          {/* Active role detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={role.role}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl gradient-bg-primary flex items-center justify-center">
                  <RoleIcon name={role.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {role.role}
                  </h3>
                  <p className="text-xs text-muted">
                    Primary Screen: {role.primaryScreen}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {role.capabilities}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
