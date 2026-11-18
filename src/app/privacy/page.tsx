"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Shield, Lock, EyeOff, UserCheck, Trash2, Database, AlertCircle, CheckCircle2, ChevronRight, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  const nutritionLabelData = [
    {
      category: "Contact Info",
      fields: [
        { name: "Name", collected: true, linked: true, purpose: "App Functionality, Account Management", encrypted: "Stored in encrypted member profile registry. Used solely for member verification and leadership roster assignment." },
        { name: "Email Address", collected: true, linked: true, purpose: "App Functionality, Account Management", encrypted: "Protected by tokenized single sign-on authentication. Used solely for secure account access and critical service notices." },
        { name: "Phone Number", collected: true, linked: true, purpose: "App Functionality, Account Management", encrypted: "Sealed on-device with AES-256 GCM before network transmission. Stored exclusively as encrypted ciphertext; unreadable in database plaintext." },
        { name: "Physical Address", collected: false, linked: false, purpose: "Not Collected", encrypted: "Never requested or collected." },
      ],
    },
    {
      category: "User Content",
      fields: [
        { name: "Photos & Media", collected: true, linked: true, purpose: "App Functionality", encrypted: "Encrypted cloud object storage for profile avatars, organizational emblems, and event archives with time-limited signed access URLs. Never shared with data brokers." },
        { name: "Messages (Chat)", collected: true, linked: true, purpose: "App Functionality", encrypted: "End-to-end sealed on-device using AES-256 GCM. Cloud servers store only encrypted ciphertext blocks; decryption keys reside exclusively on authorized devices." },
        { name: "Customer Support & Remarks", collected: true, linked: true, purpose: "App Functionality", encrypted: "Role-gated audit logs for sequential approval workflows, verified reviewer remarks, and administrative feedback." },
        { name: "Other User Content", collected: true, linked: true, purpose: "App Functionality", encrypted: "Organizational initiative proposals, itemized requisitions, task assignments, and institutional archives governed by Row-Level Security." },
      ],
    },
    {
      category: "Identifiers",
      fields: [
        { name: "User ID", collected: true, linked: true, purpose: "App Functionality, Account Management", encrypted: "Pseudorandom cryptographically secure 128-bit UUID. Contains zero personal identifiable information." },
        { name: "Institutional / Admission ID", collected: true, linked: true, purpose: "App Functionality, Account Management", encrypted: "Sealed on-device via AES-256 GCM prior to cloud persistence. Never accessible in plaintext by host databases or third parties." },
        { name: "Device ID", collected: false, linked: false, purpose: "Not Used for Tracking", encrypted: "Cryptographically rotated push notification delivery tokens; never correlated with advertising identifiers or external trackers." },
      ],
    },
    {
      category: "Usage Data & Analytics",
      fields: [
        { name: "Product Interaction", collected: true, linked: true, purpose: "App Functionality, Attendance", encrypted: "Event registration logs and 15-second dynamic QR ticket validation timestamps." },
      ],
    },
    {
      category: "Data NOT Collected (Strict Zero-Collection Guarantee)",
      fields: [
        { name: "Precise / Coarse Location (GPS)", collected: false, linked: false, purpose: "Zero Collection", encrypted: "No GPS or CoreLocation requested. Venues are text references (e.g. 'Hall C')." },
        { name: "Financial & Card Information", collected: false, linked: false, purpose: "Zero Collection", encrypted: "Internal event budgets are administrative requisitions, not consumer in-app purchases." },
        { name: "Health, Fitness & Motion Data", collected: false, linked: false, purpose: "Zero Collection", encrypted: "No health, biometric, or sensor APIs accessed." },
        { name: "Third-Party Ad Tracking Data", collected: false, linked: false, purpose: "Zero Tracking", encrypted: "No AppTrackingTransparency (ATT) required. Zero ad networks or tracking SDKs." },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        {/* Header Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
              <Shield size={14} />
              <span>Apple App Store Privacy Nutrition & Regulatory Compliance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Loop Privacy Policy & <span className="gradient-text">Data Transparency</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-3xl leading-relaxed">
              Last Updated: November 2026 • Official Privacy Policy for Loop (iOS App), Loop Admin (Workspace Portal), and Loop Core Engine.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl font-bold gradient-text">0 Tracking</div>
                <div className="text-xs text-muted mt-1">No Ad Networks / Brokers</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl font-bold gradient-text">AES-GCM</div>
                <div className="text-xs text-muted mt-1">On-Device Cryptography</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl font-bold gradient-text">Rule 5.1.1(v)</div>
                <div className="text-xs text-muted mt-1">In-App Account Deletion</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-xl font-bold gradient-text">FERPA / GDPR</div>
                <div className="text-xs text-muted mt-1">Institutional Compliance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Principles */}
        <section className="py-12 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">1. Our Core Privacy Commitments</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted">
              <div className="p-6 rounded-2xl bg-background border border-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <EyeOff size={18} className="text-primary" />
                  <span>Zero Commercial Tracking</span>
                </div>
                <p className="leading-relaxed">
                  Loop never sells, rents, or monetizes member information. We do not use advertising networks (such as Google AdMob or Meta Audience Network) and do not track users across other apps or websites.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Lock size={18} className="text-primary" />
                  <span>Client-Side Data Sealing</span>
                </div>
                <p className="leading-relaxed">
                  Personal identifiers (such as mobile numbers and student/employee admission IDs) as well as internal chat channels are sealed on-device using AES-GCM (Apple CryptoKit) before transmission to the cloud.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Trash2 size={18} className="text-primary" />
                  <span>User-Controlled Deletion</span>
                </div>
                <p className="leading-relaxed">
                  In strict accordance with Apple App Store Guideline 5.1.1(v), any member can permanently delete their account and purge their personal data directly from within the client app at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed App Store Nutrition Label Table */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                App Store Connect Transparency
              </span>
              <h2 className="text-3xl font-bold text-foreground">
                2. Mandatory App Privacy Nutrition Label Breakdown
              </h2>
              <p className="text-sm text-muted mt-2 max-w-3xl">
                The exact questionnaire responses registered in Apple App Store Connect for the Loop mobile client and Loop Admin portal:
              </p>
            </div>

            <div className="space-y-8">
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
                            {f.collected ? "Collected • Linked to User" : "NOT Collected"}
                          </div>
                        </div>

                        <div className="md:col-span-3 text-xs">
                          <span className="text-muted block font-semibold uppercase tracking-wider mb-0.5">Primary Purpose</span>
                          <span className="text-foreground">{f.purpose}</span>
                        </div>

                        <div className="md:col-span-6 text-xs text-muted leading-relaxed">
                          <span className="text-muted block font-semibold uppercase tracking-wider mb-0.5">Handling & Cryptography</span>
                          <span>{f.encrypted}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Account Deletion Protocol (Apple Guideline 5.1.1(v)) */}
        <section className="section-padding bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                Mandatory Apple Compliance
              </span>
              <h2 className="text-3xl font-bold text-foreground">
                3. In-App Account Deletion Protocol (Guideline 5.1.1(v))
              </h2>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We believe you should have complete autonomy over your digital footprint. Every member using the Loop App has an unambiguous, immediate mechanism to permanently delete their account.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center pt-4">
              <div className="p-8 rounded-3xl bg-background border border-border space-y-4">
                <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                  <Trash2 size={20} className="text-red-500" />
                  <span>How to Initiate Account Deletion:</span>
                </h3>
                <ol className="space-y-3 text-sm text-muted list-decimal list-inside leading-relaxed">
                  <li>Open the <strong>Loop App</strong> on your iOS device.</li>
                  <li>Tap on your <strong>Profile Tab</strong> in the bottom navigation.</li>
                  <li>Scroll to the bottom <strong>Account Security &amp; Data</strong> section.</li>
                  <li>Tap the red button labeled <strong>&quot;Delete Account &amp; Purge Data&quot;</strong>.</li>
                  <li>Read the confirmation notice and tap <strong>&quot;Confirm Permanent Deletion&quot;</strong>.</li>
                </ol>
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-500 leading-relaxed font-medium">
                  <strong>Irreversible Effect:</strong> Deleting your account immediately revokes all authentication tokens, purges your encrypted profile data, unlinks you from all clubs, and wipes ticket check-in records.
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <h4 className="font-bold text-foreground text-base">Remote Deletion Support Request</h4>
                <p>
                  If you are unable to access your mobile device or prefer an administrative purge, you can also submit an automated deletion request through our dedicated <a href="/support" className="text-primary font-semibold hover:underline">Support Center</a> or by emailing <code className="text-xs bg-surface px-2 py-0.5 rounded border border-border text-foreground">privacy@loopapp.com</code> from your registered institutional email address.
                </p>
                <p>
                  Requests submitted via email are verified and processed within <strong>24 business hours</strong> in full compliance with GDPR Article 17 (&quot;Right to Erasure&quot;) and California Consumer Privacy Act (CCPA) standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Cryptography Summary */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">4. Cryptographic Storage &amp; Cloud Database Infrastructure</h2>
            <div className="prose prose-invert max-w-none text-sm text-muted leading-relaxed space-y-4">
              <p>
                All data in transit is protected using TLS 1.3 encryption. Data stored within our managed PostgreSQL database instances operates under fine-grained <strong>Row-Level Security (RLS)</strong> policies, meaning access permissions are verified directly at the database engine level based on authenticated JWT cryptographic signatures.
              </p>
              <p>
                Even in the hypothetical event of an unauthorized read access to the database server, member phone numbers, identification admission numbers, and chat message contents are stored exclusively as <strong>AES-GCM sealed ciphertext</strong> derived with unique HKDF salts. Plaintext content cannot be inspected without the corresponding user or channel keys stored exclusively on client devices.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Contact */}
        <section className="py-12 bg-surface/50 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-foreground text-base">Have privacy inquiries or legal compliance questions?</h3>
              <p className="text-xs text-muted mt-1">Our Data Protection and Compliance team responds to all inquiries within 24 hours.</p>
            </div>
            <a
              href="mailto:privacy@loopapp.com"
              className="gradient-bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-xs hover:opacity-90 transition-opacity"
            >
              Contact Data Protection Officer (DPO)
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

