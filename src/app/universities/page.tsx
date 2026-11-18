"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useDemoModal } from "@/context/DemoModalContext";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, CheckCircle2, Calendar, QrCode, FileText, Users, Award, ShieldCheck, ChevronRight } from "lucide-react";

export default function UniversitiesPage() {
  const { openDemo } = useDemoModal();

  const universityFeatures = [
    {
      icon: FileText,
      title: "Paperless Multi-Stage Approvals",
      subtitle: "Zero Signature Chasing",
      description:
        "Student club leads submit proposals, itemized budgets, and venue requests directly in the app. Automatic sequential routing advances tickets through Faculty Advisors, Student Council Executives, and Deans.",
      pipeline: ["Club Lead Draft", "Faculty Advisor", "Council President", "Dean of Affairs"],
    },
    {
      icon: Calendar,
      title: "Campus Venue Conflict Manager",
      subtitle: "Zero Double-Booked Auditoriums",
      description:
        "Eliminate scheduling wars between cultural clubs, technical teams, and guest lectures. Approved venue requests atomically lock booked time slots across all university auditoriums, seminar halls, and grounds.",
      pipeline: ["Realtime Availability", "Capacity Check", "Equipment Requisition", "Atomic Slot Lock"],
    },
    {
      icon: QrCode,
      title: "Dynamic Anti-Proxy QR Attendance",
      subtitle: "Fraud-Proof Credit Verification",
      description:
        "QR codes refresh every 15 seconds with time-decay cryptographic hashes. Screenshots and forwarded images fail instantly, ensuring genuine verification for extracurricular and activity point credits.",
      pipeline: ["15s Rotating Hash", "Offline Validation", "Live Roster Sync", "Automated Credit Report"],
    },
    {
      icon: Users,
      title: "Seamless Leadership Handover",
      subtitle: "Preserved Institutional Memory",
      description:
        "Incoming executive boards inherit previous year budgets, supplier lists, high-res photo archives, constitution documents, and alumni contacts instead of starting from scratch every autumn.",
      pipeline: ["Document Vault", "Expense Archives", "Alumni Directory", "Role Reassignment"],
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
              <GraduationCap size={15} />
              <span>Loop for Higher Education & Student Affairs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              The Complete <span className="gradient-text">Campus Life</span> Operating System.
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              From club fests, technical hackathons, and athletic meets to paperless sequential faculty approvals and anti-proxy attendance — empower student leaders and relieve campus administrators.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openDemo}
                className="gradient-bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request Campus Onboarding</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="#features-list"
                className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-surface transition-colors"
              >
                Explore Campus Capabilities
              </a>
            </div>

            {/* University Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">0 Signatures</div>
                <div className="text-xs text-muted mt-1">100% Digital Workflow</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">0 Double-Books</div>
                <div className="text-xs text-muted mt-1">Auditorium Lock</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">15s Hash</div>
                <div className="text-xs text-muted mt-1">Anti-Proxy Check-in</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">100% Retained</div>
                <div className="text-xs text-muted mt-1">Institutional Memory</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section id="features-list" className="section-padding bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block">
                Tailored for Universities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-foreground">
                Engineered for Student Clubs, Councils & Deans
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted">
                How Loop modernizes every stage of collegiate co-curricular administration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {universityFeatures.map((feat) => {
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

                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-muted uppercase tracking-wider block mb-2">
                        Integrated Pipeline:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono">
                        {feat.pipeline.map((p, idx) => (
                          <div
                            key={p}
                            className="p-2 rounded-lg bg-surface border border-border font-medium text-foreground"
                          >
                            <span className="text-primary font-bold mr-1">{idx + 1}.</span>
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Campus Call to Action Banner */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl gradient-bg-primary p-12 md:p-16 text-center text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
                Bring Loop to Your University or Student Union
              </h2>
              <p className="text-base text-white/80 max-w-xl mx-auto">
                Join forward-thinking universities streamlining club governance, student budgets, and auditorium scheduling.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openDemo}
                  className="bg-white text-primary font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
                >
                  Schedule Dean & Council Demo
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

