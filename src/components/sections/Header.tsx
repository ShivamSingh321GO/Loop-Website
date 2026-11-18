"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { brand, navigation } from "@/data/content";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDemo } = useDemoModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-border shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform bg-surface">
              <Image
                src="/Loop-logo.jpeg"
                alt="Loop Logo"
                width={36}
                height={36}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <span className="text-lg font-bold text-foreground">
              {brand.name}
            </span>
            <span className="hidden sm:inline text-xs font-medium text-muted px-2 py-0.5 rounded-full border border-border">
              {brand.tagline}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openDemo}
              className="gradient-bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
            >
              {navigation.cta.label}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 flex flex-col gap-3">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDemo();
              }}
              className="gradient-bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity cursor-pointer"
            >
              {navigation.cta.label}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

