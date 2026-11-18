"use client";

import { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useDemoModal } from "@/context/DemoModalContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Database,
  Timer,
  Globe,
  Key,
  CheckCircle2,
  AlertCircle,
  Trash2,
  FileCheck,
  Camera,
  Image as ImageIcon,
  ArrowRight,
  Terminal,
  Shield,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function PrivacyAndSecurityPage() {
  const { openDemo } = useDemoModal();
  const [activeTab, setActiveTab] = useState<"privacy" | "security" | "compliance">("privacy");

  // App Privacy Nutrition Label Data — Enterprise Hardened (Zero Internal Schema Exposure)
  const nutritionLabelData = [
    {
      category: "Contact Info",
      fields: [
        {
          name: "Name",
          collected: true,
          linked: true,
          purpose: "App Functionality, Account Management",
          encrypted: "Stored in encrypted member profile registry. Used solely for member verification and leadership roster assignment.",
        },
        {
          name: "Email Address",
          collected: true,
          linked: true,
          purpose: "App Functionality, Account Management",
          encrypted: "Protected by tokenized single sign-on authentication. Used solely for secure account access and critical service notices.",
        },
        {
          name: "Phone Number",
          collected: true,
          linked: true,
          purpose: "App Functionality, Account Management",
          encrypted: "Sealed on-device with AES-256 GCM before network transmission. Stored exclusively as encrypted ciphertext; unreadable in database plaintext.",
        },
        {
          name: "Physical Address",
          collected: false,
          linked: false,
          purpose: "Not Collected",
          encrypted: "Never requested or collected.",
        },
      ],
    },
    {
      category: "User Content",
      fields: [
        {
          name: "Photos & Media",
          collected: true,
          linked: true,
          purpose: "App Functionality",
          encrypted: "Encrypted cloud object storage for profile avatars, organizational emblems, and event archives with time-limited signed access URLs. Never shared with data brokers.",
        },
        {
          name: "Messages (Chat)",
          collected: true,
          linked: true,
          purpose: "App Functionality",
          encrypted: "End-to-end sealed on-device using AES-256 GCM. Cloud servers store only encrypted ciphertext blocks; decryption keys reside exclusively on authorized devices.",
        },
        {
          name: "Customer Support & Remarks",
          collected: true,
          linked: true,
          purpose: "App Functionality",
          encrypted: "Role-gated audit logs for sequential approval workflows, verified reviewer remarks, and administrative feedback.",
        },
        {
          name: "Other User Content",
          collected: true,
          linked: true,
          purpose: "App Functionality",
          encrypted: "Organizational initiative proposals, itemized requisitions, task assignments, and institutional archives governed by Row-Level Security.",
        },
      ],
    },
    {
      category: "Identifiers",
      fields: [
        {
          name: "User ID",
          collected: true,
          linked: true,
          purpose: "App Functionality, Account Management",
          encrypted: "Pseudorandom cryptographically secure 128-bit UUID. Contains zero personal identifiable information.",
        },
        {
          name: "Institutional / Admission ID",
          collected: true,
          linked: true,
          purpose: "App Functionality, Account Management",
          encrypted: "Sealed on-device via AES-256 GCM prior to cloud persistence. Never accessible in plaintext by host databases or third parties.",
        },
        {
          name: "Device ID",
          collected: false,
          linked: false,
          purpose: "Not Used for Tracking",
          encrypted: "Cryptographically rotated push notification delivery tokens; never correlated with advertising identifiers or external trackers.",
        },
      ],
    },
    {
      category: "Usage Data & Analytics",
      fields: [
        {
          name: "Product Interaction",
          collected: true,
          linked: true,
          purpose: "App Functionality, Attendance",
          encrypted: "Event registration logs and 15-second dynamic QR ticket validation timestamps.",
        },
      ],
    },
    {
      category: "Data NOT Collected (Strict Zero-Collection Guarantee)",
      fields: [
        {
          name: "Precise / Coarse Location (GPS)",
          collected: false,
          linked: false,
          purpose: "Zero Collection",
          encrypted: "No GPS or CoreLocation requested. Venues are text references (e.g. 'Auditorium Hall C').",
        },
        {
          name: "Financial & Card Information",
          collected: false,
          linked: false,
          purpose: "Zero Collection",
          encrypted: "Internal event budgets are administrative requisitions, not consumer in-app purchases.",
        },
        {
          name: "Health, Fitness & Motion Data",
          collected: false,
          linked: false,
          purpose: "Zero Collection",
          encrypted: "No health, biometric, or sensor APIs accessed.",
        },
        {
          name: "Third-Party Ad Tracking Data",
          collected: false,
          linked: false,
          purpose: "Zero Tracking",
          encrypted: "No AppTrackingTransparency (ATT) required. Zero ad networks or tracking SDKs.",
        },
      ],
    },
  ];

  // Cryptographic Pillars — Enterprise Hardened
  const securityDeepDives = [
    {
      icon: Lock,
      title: "Client-Side Cryptographic Data Sealing",
      subtitle: "AES-GCM (256-bit) with HKDF Key Derivation",
      description:
        "Sensitive member PII (phone numbers, national IDs, admission numbers) never touches the network in plaintext. The Loop iOS app derives unique keys via RFC 5869 HKDF-SHA256 from user-specific salts and encrypts fields using Apple CryptoKit before transmission.",
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
      techSpec: "Validation: Pre-Auth Tenant Policy • Domain Masking: Configurable per tenant",
    },
  ];

  // Regulatory Compliance Items
  const exportComplianceItems = [
    {
      title: "U.S. EAR Section 740.17(b)(1) Mass-Market Exemption",
      description:
        "Loop qualifies for standard U.S. Export Administration Regulations (EAR) Category 5, Part 2 exemption. Encryption is used exclusively for authentication, secure communications (HTTPS), and client data sealing.",
    },
    {
      title: "Apple CryptoKit Native Framework",
      description:
        "No custom or proprietary cryptographic algorithms are implemented. All encryption operations rely on standard, peer-reviewed operating system primitives (AES-GCM, SHA-256) provided natively by iOS.",
    },
    {
      title: "ITSAppUsesNonExemptEncryption = NO",
      description:
        "The Loop Xcode project certifies non-exempt encryption compliance in build settings, ensuring zero friction across TestFlight distribution and App Store releases.",
    },
    {
      title: "Zero Third-Party Ad Tracking (No ATT)",
      description:
        "Loop does not link data with third-party brokers, does not incorporate advertising SDKs, and does not require Apple AppTrackingTransparency permissions.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-primary/10 blur-[140px]" />
            <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-accent/8 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
              <ShieldCheck size={14} />
              <span>Loop Trust Center • Privacy, Security &amp; Regulatory Compliance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              Privacy &amp; <span className="gradient-text">Security Architecture</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Explore how Loop safeguards member identities with client-side AES-GCM encryption, complies with Apple App Privacy Nutrition standards, and enforces zero-trust cloud persistence.
            </p>

            {/* Quick Metrics */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl sm:text-2xl font-bold gradient-text">AES-GCM 256</div>
                <div className="text-xs text-muted mt-1 font-medium">CryptoKit Sealed</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl sm:text-2xl font-bold gradient-text">0 Tracking</div>
                <div className="text-xs text-muted mt-1 font-medium">No Ad Networks</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl sm:text-2xl font-bold gradient-text">Rule 5.1.1(v)</div>
                <div className="text-xs text-muted mt-1 font-medium">In-App Deletion</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl sm:text-2xl font-bold gradient-text">EAR 740.17</div>
                <div className="text-xs text-muted mt-1 font-medium">U.S. Export Exempt</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Navigation Tabs */}
        <section className="sticky top-18 z-40 bg-background/80 backdrop-blur-xl border-y border-border py-3">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 flex justify-center">
            <div className="inline-flex rounded-full border border-border p-1 bg-surface shadow-xs">
              <button
                onClick={() => setActiveTab("privacy")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "privacy"
                    ? "gradient-bg-primary text-primary-foreground shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <EyeOff size={15} />
                <span>Data Privacy &amp; Nutrition Label</span>
              </button>

              <button
                onClick={() => setActiveTab("security")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "security"
                    ? "gradient-bg-primary text-primary-foreground shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <Lock size={15} />
                <span>Cryptographic Security</span>
              </button>

              <button
                onClick={() => setActiveTab("compliance")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "compliance"
                    ? "gradient-bg-primary text-primary-foreground shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <FileCheck size={15} />
                <span>App Store &amp; Legal Compliance</span>
              </button>
            </div>
          </div>
        </section>

        {/* Tab Content Display */}
        <div className="py-12">
          {/* TAB 1: PRIVACY */}
          {activeTab === "privacy" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Executive Privacy Overview */}
              <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                    Zero-Knowledge Privacy
                  </span>
                  <h2 className="text-3xl font-bold text-foreground">
                    1. App Privacy Nutrition Label (App Store Connect Questionnaire)
                  </h2>
                  <p className="text-sm text-muted mt-2 max-w-3xl leading-relaxed">
                    Under Apple&apos;s App Privacy transparency framework, below is the exact, audited field-by-field disclosure of all data collected, linked, and handled by the Loop ecosystem.
                  </p>
                </div>

                {/* Nutrition Label Cards */}
                <div className="space-y-8 pt-4">
                  {nutritionLabelData.map((section) => (
                    <div key={section.category} className="rounded-3xl border border-border bg-surface overflow-hidden shadow-xs">
                      <div className="px-6 py-4 bg-background border-b border-border flex items-center justify-between">
                        <h3 className="font-bold text-foreground text-base">{section.category}</h3>
                        <span className="text-xs text-muted font-mono">App Functionality Only</span>
                      </div>

                      <div className="divide-y divide-border">
                        {section.fields.map((f) => (
                          <div key={f.name} className="p-6 grid md:grid-cols-12 gap-4 items-start text-sm">
                            <div className="md:col-span-3">
                              <div className="font-semibold text-foreground flex items-center gap-2">
                                {f.collected ? (
                                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                                ) : (
                                  <AlertCircle size={16} className="text-muted shrink-0" />
                                )}
                                <span>{f.name}</span>
                              </div>
                              <div className="text-xs text-muted mt-1 font-mono">
                                {f.collected ? "Collected • Linked to Identity" : "NOT Collected"}
                              </div>
                            </div>

                            <div className="md:col-span-3 text-xs">
                              <span className="text-muted block font-semibold uppercase tracking-wider mb-0.5">Primary Purpose</span>
                              <span className="text-foreground">{f.purpose}</span>
                            </div>

                            <div className="md:col-span-6 text-xs text-muted leading-relaxed">
                              <span className="text-muted block font-semibold uppercase tracking-wider mb-0.5">Protection &amp; Sealing</span>
                              <span>{f.encrypted}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-App Account Deletion (Guideline 5.1.1(v)) */}
              <div className="bg-surface/50 border-y border-border py-16">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                      Mandatory Apple Rule
                    </span>
                    <h2 className="text-3xl font-bold text-foreground">
                      2. In-App Account Deletion Protocol (Guideline 5.1.1(v))
                    </h2>
                    <p className="text-sm text-muted mt-2 max-w-3xl leading-relaxed">
                      Every member retains full ownership of their data. In accordance with App Review Guideline 5.1.1(v), account deletion can be executed directly within the app without human intervention.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center pt-4">
                    <div className="p-8 rounded-3xl bg-background border border-border space-y-4">
                      <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                        <Trash2 size={20} className="text-red-500" />
                        <span>How to Delete Your Account In-App:</span>
                      </h3>
                      <ol className="space-y-3 text-sm text-muted list-decimal list-inside leading-relaxed">
                        <li>Open the <strong>Loop App</strong> on your iOS device.</li>
                        <li>Tap your <strong>Profile Tab</strong> in the bottom navigation bar.</li>
                        <li>Scroll down to the <strong>Account Security &amp; Data</strong> section.</li>
                        <li>Tap the red button labeled <strong>&quot;Delete Account &amp; Purge Data&quot;</strong>.</li>
                        <li>Confirm the dialog: <strong>&quot;Confirm Permanent Deletion&quot;</strong>.</li>
                      </ol>
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-500 leading-relaxed font-medium">
                        <strong>Instant Purge:</strong> Immediately revokes cryptographic session tokens, permanently purges encrypted profile records, unlinks all enrolled units, and removes attendance check-in stamps.
                      </div>
                    </div>

                    <div className="space-y-4 text-sm text-muted leading-relaxed">
                      <h4 className="font-bold text-foreground text-base">Remote Erasure Assistance</h4>
                      <p>
                        Users who cannot access their mobile client can request remote account deletion by visiting our <a href="/support" className="text-primary font-semibold hover:underline">Support Portal</a> or emailing <code className="text-xs bg-surface px-2 py-0.5 rounded border border-border text-foreground">privacy@loopapp.com</code>.
                      </p>
                      <p>
                        Requests are verified and processed within <strong>24 business hours</strong> under GDPR Article 17 (&quot;Right to be Forgotten&quot;) and FERPA guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: SECURITY & CRYPTOGRAPHY */}
          {activeTab === "security" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                    Zero-Trust Cryptography
                  </span>
                  <h2 className="text-3xl font-bold text-foreground">
                    Core Cryptographic Pillars &amp; Architecture
                  </h2>
                  <p className="text-sm text-muted mt-2 max-w-3xl leading-relaxed">
                    Loop seals member data on the physical device with Apple CryptoKit before transmission. Cloud databases store only encrypted ciphertext blocks.
                  </p>
                </div>

                <div className="space-y-8 pt-4">
                  {securityDeepDives.map((sec, idx) => {
                    const IconComponent = sec.icon;
                    return (
                      <div
                        key={sec.title}
                        className="p-8 rounded-3xl border border-border bg-surface space-y-4 hover:border-primary/30 transition-colors shadow-xs"
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
                          <span className="text-[11px] font-mono text-muted uppercase tracking-wider px-3 py-1 rounded-full bg-background border border-border self-start sm:self-auto">
                            Layer 0{idx + 1}
                          </span>
                        </div>

                        <p className="text-sm text-muted leading-relaxed">{sec.description}</p>

                        <div className="pt-2 p-3.5 rounded-xl bg-background border border-border text-xs font-mono text-primary flex items-center gap-2">
                          <Terminal size={14} className="shrink-0" />
                          <span>{sec.techSpec}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: COMPLIANCE & LEGAL */}
          {activeTab === "compliance" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* U.S. Export Compliance */}
              <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                    Federal &amp; Export Certification
                  </span>
                  <h2 className="text-3xl font-bold text-foreground">
                    U.S. Export Administration Regulations (EAR) Category 5, Part 2
                  </h2>
                  <p className="text-sm text-muted mt-2 max-w-3xl leading-relaxed">
                    Formal regulatory declarations ensuring compliance with U.S. Commerce Department encryption controls and App Store submission requirements:
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-4">
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

              {/* Hardware Permissions Disclosure */}
              <div className="bg-surface/50 border-y border-border py-16">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Hardware &amp; System Permissions Justifications</h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      Declared in Loop iOS <code>Info.plist</code> and App Review Information:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 text-xs text-muted pt-2">
                    <div className="p-6 rounded-2xl bg-background border border-border space-y-2">
                      <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                        <Camera size={16} className="text-primary" />
                        <code>NSCameraUsageDescription</code>
                      </div>
                      <p className="leading-relaxed">
                        &quot;We need access to your camera to let you take photos and scan QR codes for event attendance.&quot;
                      </p>
                      <div className="text-[11px] text-muted font-mono bg-surface p-2.5 rounded border border-border">
                        Purpose: Validates 15-second dynamic anti-proxy QR attendance tokens at events.
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-background border border-border space-y-2">
                      <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                        <ImageIcon size={16} className="text-accent" />
                        <code>NSPhotoLibraryUsageDescription</code>
                      </div>
                      <p className="leading-relaxed">
                        &quot;We need access to your photo library to let you select and upload photos for your profile, club banners, and event galleries.&quot;
                      </p>
                      <div className="text-[11px] text-muted font-mono bg-surface p-2.5 rounded border border-border">
                        Purpose: Allows manual selection of profile pictures, club logos, and event flyers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Global Consultation CTA */}
        <section className="section-padding border-t border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="rounded-3xl gradient-bg-primary p-12 md:p-16 text-center text-white space-y-6 shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
                Schedule an Institutional Security &amp; Compliance Review
              </h2>
              <p className="text-base text-white/80 max-w-xl mx-auto">
                Our cryptographic engineering team is ready to conduct architecture reviews with your University IT, Corporate Legal, or Data Protection departments.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openDemo}
                  className="bg-white text-primary font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
                >
                  Schedule Architecture Review
                </button>
                <a
                  href="/terms"
                  className="border-2 border-white/30 text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
                >
                  Review Terms of Service &amp; EULA
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
