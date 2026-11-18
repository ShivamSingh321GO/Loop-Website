"use client";

import { ArrowRight } from "lucide-react";
import { ctaBanner } from "@/data/content";
import { useDemoModal } from "@/context/DemoModalContext";

export default function CtaBanner() {
  const { openDemo } = useDemoModal();
  return (
    <section id="demo" className="section-padding">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden gradient-bg-primary p-12 md:p-16 text-center">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
              {ctaBanner.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto">
              {ctaBanner.subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openDemo}
                className="bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
              >
                {ctaBanner.primaryCta.label}
                <ArrowRight size={16} />
              </button>
              <a
                href={ctaBanner.secondaryCta.href}
                className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                {ctaBanner.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

