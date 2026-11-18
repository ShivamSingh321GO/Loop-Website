"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useDemoModal } from "@/context/DemoModalContext";
import { ShieldCheck, Lock, Key, Database, Timer, Globe, CheckCircle2, ArrowRight, Terminal, Award, FileCheck, Cpu, EyeOff } from "lucide-react";

export default function SecurityPage() {
  const { openDemo } = useDemoModal();

  const securityDeepDives = [
    {
      icon: Lock,
      title: "Client-Side Cryptographic Data Sealing",
      subtitle: "AES-GCM (256-bit) with HKDF Key Derivation",
      description:
        "Sensitive member PII (phone numbers, national IDs, admission numbers) never touches the network in plaintext. The Loop iOS app derives unique keys via HKDF-SHA256 from user-specific salts and encrypts fields using Apple CryptoKit before transmission.",
      techSpec: "Standard: Apple CryptoKit AES-GCM (256-bit) • Key Derivation: RFC 5869 HKDF-SHA256 • AEAD Authenticated",
    },
    {
      icon: Key,
      title: "Deterministic Channel Encryption",
      subtitle: "Zero-Knowledge Communication",
      description:
        "Every group chat, committee channel, and event breakout dynamically calculates an isolated 256-bit symmetric encryption key. Real-time message relays and cloud databases store and broadcast only sealed ciphertext blocks. Even with full database access, internal messages remain unreadable.",
      techSpec: "Protocol: Ephemeral 256-bit Symmetric Channel Derivation • Decryption: Pure client-side in-memory resolution",
    },
    {
      icon: Database,
      title: "Fine-Grained Row-Level Security (RLS)",
      subtitle: "Engine-Level Database Isolation",
      description:
        "Security is enforced at the database engine level, not in client code. Strict RLS policies ensure that users can only read or mutate rows matching their cryptographic authorization claims and enrolled unit memberships.",
      techSpec: "Database Isolation: Engine-Level Row-Level Security (RLS) • Cryptographic JWT Verification • Leak Surface: Zero",
    },
    {
      icon: Timer,
      title: "Time-Decay QR Cryptographic Tokens",
      subtitle: "Anti-Proxy Attendance Engine",
      description:
        "Attendance check-in QR codes rotate dynamically every 15 seconds. Each code contains an ephemeral cryptographically signed token that decays in memory. Forwarded screenshots and messages expire before arrival, making proxy check-ins technically impossible.",
      techSpec: "Cycle: 15 seconds • Algorithm: HMAC-SHA256 + UTC Window • Verification: < 2 seconds",
    },
    {
      icon: Globe,
      title: "Institutional Domain Controls",
      subtitle: "Verified Domain Whitelisting",
      description:
        "Organizations enforce strict registration rules: only email addresses ending in approved institutional domains (@harvard.edu, @acm.org, @enterprise.com) are permitted to create accounts or join private networks.",
      techSpec: "Validation: Pre-Auth Trigger • Domain Masking: Configurable per tenant",
    },
  ];

  const exportComplianceItems = [
    {
      title: "EAR Section 740.17(b)(1) Mass-Market Exemption",
      description:
        "Loop qualifies for standard U.S. Export Administration Regulations (EAR) Category 5, Part 2 exemption. Encryption is used exclusively for authentication, secure communications (HTTPS), and client data sealing.",
    },
    {
      title: "Apple CryptoKit Native Framework",
      description:
        "No custom or proprietary cryptographic algorithms are implemented. All encryption operations rely on standard, peer-reviewed operating system primitives (AES-GCM, SHA-256) provided natively by iOS.",
    },
    {
      title: "Non-Exempt Encryption Key in Info.plist",
      description:
        "The Loop Xcode project configures ITSAppUsesNonExemptEncryption = NO, certifying that the app meets all statutory exemptions and eliminating review friction.",
    },
    {
      title: "Zero Third-Party Ad Tracking (No ATT)",
      description:
        "Loop does not link data with third-party brokers, does not incorporate ad networks, and does not require Apple AppTrackingTransparency permissions.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
              <ShieldCheck size={15} />
              <span>Zero-Trust Architecture, Encryption &amp; Compliance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              Enterprise Security. <span className="gradient-text">Privacy by Design</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Loop was engineered from day one with client-side cryptographic sealing, zero-trust cloud storage, and database-level isolation. Your organizational data remains sealed — always.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openDemo}
                className="gradient-bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request Security Walkthrough</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="/privacy"
                className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-surface transition-colors"
              >
                Review App Privacy Label
              </a>
            </div>

            {/* Badges */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/20 bg-surface text-xs font-semibold text-primary shadow-xs">
                <ShieldCheck size={14} />
                AES-GCM (256-bit)
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/20 bg-surface text-xs font-semibold text-primary shadow-xs">
                <CheckCircle2 size={14} />
                FERPA &amp; GDPR Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/20 bg-surface text-xs font-semibold text-primary shadow-xs">
                <Database size={14} />
                PostgreSQL Row-Level Security
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/20 bg-surface text-xs font-semibold text-primary shadow-xs">
                <Lock size={14} />
                U.S. EAR 740.17(b)(1) Exempt
              </span>
            </div>
          </div>
        </section>

        {/* Cryptographic Architecture Deep Dive */}
        <section className="section-padding bg-surface">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block">
                Core Cryptographic Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-foreground">
                How Loop Protects Sensitive Member Data
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted">
                Zero plaintext exposure. Cryptographic proof of attendance. Hardened database guarantees.
              </p>
            </div>

            <div className="space-y-8">
              {securityDeepDives.map((sec, idx) => {
                const IconComponent = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-8 rounded-3xl border border-border bg-background shadow-xs space-y-4 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl gradient-bg-primary flex items-center justify-center text-white">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{sec.title}</h3>
                          <p className="text-xs text-accent font-semibold">{sec.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-muted uppercase tracking-wider px-3 py-1 rounded-full bg-surface border border-border self-start sm:self-auto">
                        Security Layer 0{idx + 1}
                      </span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed">{sec.description}</p>

                    <div className="pt-2 p-3.5 rounded-xl bg-surface border border-border text-xs font-mono text-primary flex items-center gap-2">
                      <Terminal size={14} className="shrink-0" />
                      <span>{sec.techSpec}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* U.S. Export Compliance & App Store Certification */}
        <section className="section-padding border-t border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 inline-block">
                Regulatory &amp; App Store Certification
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                U.S. Export Administration &amp; Apple Store Connect Standards
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted">
                Detailed compliance specifications confirming our encryption architecture adheres to federal and platform regulations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {exportComplianceItems.map((item) => (
                <div key={item.title} className="p-6 rounded-3xl border border-border bg-surface space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                    <FileCheck size={18} className="text-primary shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware Permissions Justification */}
        <section className="py-14 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground">Hardware &amp; System Permissions Disclosure</h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                As declared in our iOS <code>Info.plist</code> and App Review Information:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs text-muted">
              <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
                <span className="font-mono text-primary font-bold">NSCameraUsageDescription</span>
                <p className="leading-relaxed">
                  &quot;We need access to your camera to let you take photos and scan QR codes for event attendance.&quot;
                </p>
                <div className="text-[11px] text-muted font-mono bg-surface p-2 rounded border border-border">
                  Purpose: 15-second anti-proxy QR code check-in validation.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
                <span className="font-mono text-accent font-bold">NSPhotoLibraryUsageDescription</span>
                <p className="leading-relaxed">
                  &quot;We need access to your photo library to let you select and upload photos for your profile, club banners, and event galleries.&quot;
                </p>
                <div className="text-[11px] text-muted font-mono bg-surface p-2 rounded border border-border">
                  Purpose: User avatar, club identity logos, and past event archives.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Consultation CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="rounded-3xl gradient-bg-primary p-12 md:p-16 text-center text-white space-y-6 shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
                Need an Institutional Compliance Review?
              </h2>
              <p className="text-base text-white/80 max-w-xl mx-auto">
                Our engineering team is ready to conduct security assessments with your IT, Legal, and Compliance departments.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openDemo}
                  className="bg-white text-primary font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
                >
                  Schedule Security Architecture Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
