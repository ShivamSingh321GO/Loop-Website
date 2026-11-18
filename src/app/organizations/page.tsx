"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useDemoModal } from "@/context/DemoModalContext";
import { Building2, ArrowRight, CheckCircle2, Network, ShieldAlert, FileSpreadsheet, Lock, Users2 } from "lucide-react";

export default function OrganizationsPage() {
  const { openDemo } = useDemoModal();

  const organizationFeatures = [
    {
      icon: Network,
      title: "Multi-Level Chapter Hierarchy",
      subtitle: "Scalable 2-to-5 Tier Governance",
      description:
        "Model complex federations with custom designations: National HQ → State Directorates → City Chapters → Field Committees. Sub-units automatically inherit central policies while retaining local autonomy.",
      highlight: "Custom terminology at every level with strictly defined leader/subleader quotas.",
    },
    {
      icon: ShieldAlert,
      title: "Audited Budget & Grant Allocation",
      subtitle: "Pre-Disbursement Compliance",
      description:
        "Verify expense justifications and requisition orders before physical equipment, promotional assets, or funds are dispatched to regional chapters or corporate employee resource groups.",
      highlight: "Itemized receipts and real-time ledger sync directly through sequential approvals.",
    },
    {
      icon: Lock,
      title: "Encrypted Community Safe Spaces",
      subtitle: "Zero-Trust Confidential Discussions",
      description:
        "Corporate ERGs (Women in Tech, Pride Guilds, Veterans) and volunteer groups hold confidential strategy discussions sealed on-device with AES-GCM before transmission. Data is unreadable even by server administrators.",
      highlight: "Isolated 256-bit symmetric HKDF keys derived dynamically per channel.",
    },
    {
      icon: FileSpreadsheet,
      title: "Instant Bulk CSV Onboarding",
      subtitle: "Deploy to Thousands in Seconds",
      description:
        "Import hundreds of volunteers, coordinators, and employees in a single transaction with predefined roles, affiliations, and temporary credentials. Restrict sign-ups using corporate domain whitelisting.",
      highlight: "Instant token revocation and status flags (Active, Inactive, Suspended).",
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

          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
              <Building2 size={15} />
              <span>Loop for Non-Profits, NGOs & Corporate ERGs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              Effortless Governance for <span className="gradient-text">Distributed Communities</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Give regional chapters, volunteer networks, and corporate employee resource groups the autonomy to thrive, backed by centralized governance, compliance, and budget tracking.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openDemo}
                className="gradient-bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="#enterprise-features"
                className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-surface transition-colors"
              >
                Explore Governance Features
              </a>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">5 Tiers</div>
                <div className="text-xs text-muted mt-1">Configurable Depth</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">AES-GCM</div>
                <div className="text-xs text-muted mt-1">Safe Space Privacy</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">&lt; 30s</div>
                <div className="text-xs text-muted mt-1">CSV Bulk Provisioning</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">Realtime</div>
                <div className="text-xs text-muted mt-1">Feature Kill-Switches</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section id="enterprise-features" className="section-padding bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block">
                Built for Decentralized Scale
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-foreground">
                Centralized Oversight. Decentralized Execution.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted">
                How Loop eliminates chaos across multi-chapter and corporate community ecosystems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {organizationFeatures.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-8 rounded-3xl border border-border bg-background shadow-xs space-y-4 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl gradient-bg-primary flex items-center justify-center text-white">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{feat.title}</h3>
                        <p className="text-xs text-accent font-semibold">{feat.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted leading-relaxed">{feat.description}</p>

                    <div className="pt-2 p-3 rounded-xl bg-surface border border-border/80 text-xs text-muted flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{feat.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Call to Action */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl gradient-bg-primary p-12 md:p-16 text-center text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
                Ready to Unify Your Chapter or Enterprise Network?
              </h2>
              <p className="text-base text-white/80 max-w-xl mx-auto">
                Bring cryptographic security, sequential approvals, and clean task execution to every unit.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openDemo}
                  className="bg-white text-primary font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
                >
                  Book Enterprise Consultation
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

