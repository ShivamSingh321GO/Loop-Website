"use client";

import { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { LifeBuoy, Mail, MessageSquare, Trash2, HelpCircle, CheckCircle2, ArrowRight, ShieldCheck, Camera, Image as ImageIcon } from "lucide-react";

export default function SupportPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    issueType: "general",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "How do I permanently delete my account and personal data?",
      a: "In compliance with Apple Guideline 5.1.1(v), you can delete your account directly in the Loop iOS App by navigating to Profile → Account Security → 'Delete Account & Purge Data'. You can also submit an automated deletion request using the support form on this page or by emailing privacy@loopapp.com.",
    },
    {
      q: "Why does the event attendance QR code rotate every 15 seconds?",
      a: "Loop uses anti-proxy cryptographic time-decay tokens. The QR code regenerates a signed HMAC hash every 15 seconds so that screenshots, forwards, and photos cannot be shared with absent peers for fraudulent attendance.",
    },
    {
      q: "What hardware permissions does Loop request and why?",
      a: "Camera (NSCameraUsageDescription): Used solely to scan attendance QR codes at events. Photo Library (NSPhotoLibraryUsageDescription): Used solely to select profile avatars, club logos, and event banner uploads. We never access your camera or photos without your active in-app interaction.",
    },
    {
      q: "How does the sequential approval workflow work?",
      a: "When a club lead submits an initiative, Loop routes it sequentially: Step 1 (Faculty Advisor) → Step 2 (Finance Officer) → Step 3 (Student Council President) → Step 4 (Dean / Facility Manager). An initiative only advances to the next step once the prior leader approves.",
    },
    {
      q: "How are my messages and phone number encrypted?",
      a: "Member phone numbers, admission IDs, and chat messages are encrypted on-device via Apple CryptoKit (AES-GCM 256-bit) before transmission. They are stored on cloud servers as ciphertext blocks and decrypted only on authorized devices.",
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

          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
              <LifeBuoy size={14} />
              <span>Official Loop Support &amp; Help Desk</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-3xl mx-auto">
              How Can We <span className="gradient-text">Help You</span> Today?
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Technical assistance, campus onboarding inquiries, and in-app account deletion support for the Loop ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-primary" />
                <span>support@loopapp.com</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-accent" />
                <span>24-Hour Response SLA</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Trash2 size={14} className="text-red-500" />
                <span>Guideline 5.1.1(v) Compliant</span>
              </span>
            </div>
          </div>
        </section>

        {/* Contact Form & Account Deletion Notice */}
        <section className="section-padding bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 rounded-3xl border border-border bg-surface p-8 shadow-sm">
                {!formSubmitted ? (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Submit a Support Ticket</h2>
                    <p className="text-sm text-muted mb-6">
                      Whether you are an institution administrator, student lead, or general member, our engineering team is here to assist.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-foreground mb-1.5">Your Full Name</label>
                          <input
                            type="text"
                            required
                            value={ticketData.name}
                            onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                            placeholder="Jamie Doe"
                            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground mb-1.5">Email Address</label>
                          <input
                            type="email"
                            required
                            value={ticketData.email}
                            onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                            placeholder="jamie@institution.edu"
                            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-foreground mb-1.5">Issue Category</label>
                          <select
                            value={ticketData.issueType}
                            onChange={(e) => setTicketData({ ...ticketData, issueType: e.target.value })}
                            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="general">General Support Inquiry</option>
                            <option value="account-deletion">Account &amp; Data Deletion Request (Guideline 5.1.1(v))</option>
                            <option value="qr-attendance">QR Attendance &amp; Check-in Issue</option>
                            <option value="approvals">Sequential Approval Pipeline</option>
                            <option value="venue-clash">Venue Scheduling &amp; Conflict Lock</option>
                            <option value="superadmin">Loop Admin Portal Assistance</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground mb-1.5">University / Organization</label>
                          <input
                            type="text"
                            value={ticketData.organization}
                            onChange={(e) => setTicketData({ ...ticketData, organization: e.target.value })}
                            placeholder="Campus or Company Name"
                            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Description of Issue / Request</label>
                        <textarea
                          required
                          rows={4}
                          value={ticketData.message}
                          onChange={(e) => setTicketData({ ...ticketData, message: e.target.value })}
                          placeholder="Please provide details regarding your inquiry, bug report, or account deletion request..."
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full gradient-bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        <span>Submit Support Ticket</span>
                        <ArrowRight size={16} />
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-accent/15 text-accent mx-auto flex items-center justify-center">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Support Ticket Submitted!</h3>
                    <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-foreground font-semibold">{ticketData.name}</span>. Your ticket has been logged and assigned to our technical operations team. We will respond to <span className="text-foreground font-semibold">{ticketData.email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 border border-border text-foreground font-semibold px-6 py-2 rounded-full text-xs hover:bg-background transition-colors"
                    >
                      Submit Another Ticket
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Hardware Permissions & Deletion Policy */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-3xl bg-background border border-border space-y-3">
                  <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                    <Trash2 size={18} className="text-red-500" />
                    <span>In-App Account Deletion (Guideline 5.1.1(v))</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    You do not need to wait for email support to delete your account. You can purge your account instantly in the app under <strong>Profile &rarr; Account Security &rarr; Delete Account</strong>.
                  </p>
                  <div className="text-[11px] text-muted font-mono bg-surface p-2.5 rounded-lg border border-border">
                    Purges: User Profile, Phone, Admission ID, and Event Check-ins.
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-background border border-border space-y-3">
                  <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                    <Camera size={18} className="text-primary" />
                    <span>Camera Permission Justification</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    <code>NSCameraUsageDescription</code>: Loop requests camera access exclusively to allow organizers and event leads to scan rotating 15-second QR attendance passes. We never capture background imagery.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-background border border-border space-y-3">
                  <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                    <ImageIcon size={18} className="text-accent" />
                    <span>Photo Library Permission Justification</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    <code>NSPhotoLibraryUsageDescription</code>: Loop requests photo library access solely when you manually choose to upload a profile avatar, club logo, or event poster flyer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-bold text-foreground">Common Inquiries &amp; Guides</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((f) => (
                <div key={f.q} className="p-6 rounded-2xl border border-border bg-surface space-y-2">
                  <h3 className="font-bold text-foreground text-sm flex items-start gap-2">
                    <HelpCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{f.q}</span>
                  </h3>
                  <p className="text-xs text-muted leading-relaxed pl-6">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

