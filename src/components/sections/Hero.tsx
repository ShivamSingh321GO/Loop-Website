"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { hero } from "@/data/content";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Hero() {
  const { openDemo } = useDemoModal();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {hero.pill}
            <ChevronRight size={12} />
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-5xl mx-auto leading-[1.1]"
        >
          The Operating System for{" "}
          <span className="gradient-text">Modern Organizations</span>,{" "}
          Communities & Clubs.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openDemo}
            className="gradient-bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg cursor-pointer"
          >
            {hero.primaryCta.label}
            <ArrowRight size={16} />
          </button>
          <a
            href={hero.secondaryCta.href}
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-surface transition-colors"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        {/* Loop Kinetic Icon Video Animation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 mx-auto max-w-4xl"
        >
          <div className="relative rounded-3xl p-2 bg-gradient-to-b from-primary/30 via-border/50 to-transparent shadow-2xl">
            {/* Ambient backlight glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl opacity-60 pointer-events-none -z-10" />

            {/* Video container with window header */}
            <div className="relative rounded-[22px] overflow-hidden bg-surface border border-border shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="font-mono text-[11px] text-muted ml-2">loop-identity.motion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Continuous Connection
                  </span>
                </div>
              </div>

              {/* Video Element */}
              <div className="relative aspect-video w-full bg-black/5 flex items-center justify-center overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/Loop-Icon_video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted flex items-center justify-center gap-2">
            <span>Interconnecting members, leaders, and operations in one continuous ecosystem.</span>
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

