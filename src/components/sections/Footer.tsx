"use client";

import Image from "next/image";
import { brand, footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-border shadow-sm flex-shrink-0 bg-surface">
                <Image
                  src="/Loop-logo.jpeg"
                  alt="Loop Logo"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-lg font-bold text-surface-foreground">
                {brand.name}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-surface-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © 2026 {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            {brand.fullTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

