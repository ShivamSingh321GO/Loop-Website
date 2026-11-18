"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Monitor, Check, QrCode, RefreshCw, CheckCircle2, Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { dualProduct } from "@/data/content";

export default function DualProduct() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = dualProduct.tabs[activeTab];

  // --- Dynamic 15-Second Rotating QR Simulator State ---
  const [qrCountdown, setQrCountdown] = useState(15);
  const [qrHash, setQrHash] = useState("0x8F9A...2C7D");
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (activeTab !== 0) return;
    const interval = setInterval(() => {
      setQrCountdown((prev) => {
        if (prev <= 1) {
          // Generate new simulated hash
          const randomHex = Math.random().toString(16).substring(2, 6).toUpperCase();
          setQrHash(`0x${randomHex}...${Math.random().toString(16).substring(2, 6).toUpperCase()}`);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeTab]);

  // --- Sequential Approval Stepper State ---
  const [approvalStep, setApprovalStep] = useState(2); // 0: Club Lead, 1: Finance, 2: Advisor, 3: Dean
  const approvalStages = [
    { title: "Club Lead Submission", role: "Alex M. (Robotics Lead)", status: "Approved" },
    { title: "Budget & Requisitions", role: "Priya S. (Finance Officer)", status: "Approved" },
    { title: "Faculty & Compliance", role: "Prof. H. Harrison (Advisor)", status: "Pending Review" },
    { title: "Dean / Venue Lock", role: "Office of Student Affairs", status: "Queued" },
  ];

  const advanceApproval = () => {
    setApprovalStep((prev) => (prev < 3 ? prev + 1 : 1));
  };

  return (
    <section id="app" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block">
            Dual Platform Solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-surface-foreground">
            {dualProduct.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            One shared secure engine connecting everyday members on mobile to institutional leaders on desktop.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-border p-1 bg-background">
            {dualProduct.tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === i
                    ? "gradient-bg-primary text-primary-foreground shadow-md"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {i === 0 ? <Smartphone size={16} /> : <Monitor size={16} />}
                <span>{t.label}</span>
                <span className="hidden sm:inline text-xs opacity-70">
                  — {t.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left — Description */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                {activeTab === 0 ? "iOS Mobile Experience" : "Superadmin Command Portal"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-surface-foreground mb-4">
                {tab.label}{" "}
                <span className="text-muted font-normal text-lg">
                  {tab.subtitle}
                </span>
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                {tab.description}
              </p>
              <ul className="space-y-3">
                {tab.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full gradient-bg-primary flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-surface-foreground">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Interactive Simulator Mockup */}
            <div className="relative flex items-center justify-center">
              {activeTab === 0 ? (
                /* Interactive Loop Mobile App Simulator */
                <div className="w-full max-w-sm rounded-3xl border border-border bg-background p-5 shadow-xl space-y-4">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-xs text-muted pb-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="relative h-4 w-4 rounded-md overflow-hidden border border-border/80">
                        <Image
                          src="/Loop-logo.jpeg"
                          alt="Loop"
                          width={16}
                          height={16}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="font-semibold text-foreground">Loop App iOS</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-primary font-medium">
                      <ShieldCheck size={12} />
                      AES-GCM Sealed
                    </span>
                  </div>

                  {/* Event Ticket Header */}
                  <div className="p-4 rounded-2xl bg-surface border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                        Active Event Pass
                      </span>
                      <span className="text-xs text-muted font-mono">14:00 - 18:00</span>
                    </div>
                    <h4 className="font-bold text-foreground text-sm">
                      Annual Campus Hackathon & Demo Day
                    </h4>
                    <p className="text-xs text-muted">Auditorium Main Hall • Hall C</p>
                  </div>

                  {/* 15s Dynamic Anti-Proxy QR Component */}
                  <div className="p-4 rounded-2xl bg-surface border border-border text-center space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span className="flex items-center gap-1 font-semibold text-foreground">
                        <QrCode size={14} className="text-primary" />
                        Dynamic Cryptographic Token
                      </span>
                      <span className="flex items-center gap-1 font-mono text-accent font-bold">
                        <RefreshCw size={11} className="animate-spin" />
                        {qrCountdown}s
                      </span>
                    </div>

                    {/* QR Code graphic representation */}
                    <div className="relative mx-auto w-32 h-32 rounded-xl bg-background border border-border p-2 flex flex-col items-center justify-center">
                      <QrCode size={84} className="text-foreground transition-all duration-300" />
                      <div className="absolute inset-0 bg-primary/5 rounded-xl pointer-events-none" />
                    </div>

                    <div className="text-[11px] font-mono text-muted bg-background/80 py-1 px-2 rounded border border-border/60">
                      Token Hash: <span className="text-primary font-semibold">{qrHash}</span>
                    </div>

                    <button
                      onClick={() => setScanned(!scanned)}
                      className="w-full py-2 px-3 rounded-xl gradient-bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow"
                    >
                      {scanned ? (
                        <>
                          <CheckCircle2 size={13} />
                          <span>Attendance Verified ✓</span>
                        </>
                      ) : (
                        <span>Simulate Volunteer QR Scan</span>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Loop Workspace Approval Stepper Simulator */
                <div className="w-full max-w-md rounded-3xl border border-border bg-background p-5 shadow-xl space-y-4">
                  {/* Portal Bar */}
                  <div className="flex items-center justify-between text-xs text-muted pb-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="relative h-4 w-4 rounded-md overflow-hidden border border-border/80 ml-1">
                        <Image
                          src="/Loop-logo.jpeg"
                          alt="Loop"
                          width={16}
                          height={16}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="font-mono text-[11px] text-muted">superadmin.loop-os.com</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                      Live Router
                    </span>
                  </div>

                  {/* Initiative Title */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        Tech Symposium & Robotics Arena
                      </h4>
                      <p className="text-xs text-muted">Sequential Multi-Stage Sign-off</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent/10 text-accent">
                      Stage {approvalStep + 1} of 4
                    </span>
                  </div>

                  {/* Sequential Pipeline Visualizer */}
                  <div className="space-y-2 pt-1">
                    {approvalStages.map((stage, idx) => {
                      const isComplete = idx < approvalStep;
                      const isCurrent = idx === approvalStep;

                      return (
                        <div
                          key={stage.title}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between transition-all ${
                            isComplete
                              ? "bg-primary/5 border-primary/20 text-foreground"
                              : isCurrent
                              ? "bg-surface border-accent text-foreground shadow-sm"
                              : "bg-surface/50 border-border text-muted"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                                isComplete
                                  ? "bg-primary text-white"
                                  : isCurrent
                                  ? "bg-accent text-white animate-pulse"
                                  : "bg-muted/20 text-muted"
                              }`}
                            >
                              {isComplete ? "✓" : idx + 1}
                            </div>
                            <div>
                              <div className="font-semibold">{stage.title}</div>
                              <div className="text-[10px] text-muted">{stage.role}</div>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                              isComplete
                                ? "text-primary bg-primary/10"
                                : isCurrent
                                ? "text-accent bg-accent/10"
                                : "text-muted bg-background"
                            }`}
                          >
                            {isComplete ? "Signed" : isCurrent ? "Reviewing" : "Waiting"}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Bar */}
                  <button
                    onClick={advanceApproval}
                    className="w-full py-2.5 px-3 rounded-xl gradient-bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow"
                  >
                    <span>
                      {approvalStep < 3 ? "Simulate Leader Approval →" : "Workflow Complete! Reset Pipeline ⟳"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
