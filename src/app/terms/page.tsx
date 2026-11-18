"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ShieldAlert, FileText, Ban, Flag, UserX, Clock, CheckCircle2 } from "lucide-react";

export default function TermsOfServicePage() {
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
              <FileText size={14} />
              <span>Apple App Store EULA &amp; Organizational Terms</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Terms of Service &amp; <span className="gradient-text">End User License Agreement</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-3xl leading-relaxed">
              Effective Date: November 2026 • Governs usage of Loop App (iOS Client) and Loop Admin (Workspace Portal).
            </p>
          </div>
        </section>

        {/* UGC & Zero Tolerance Policy Banner (Apple Guideline 1.2) */}
        <section className="py-8 bg-red-500/5 border-y border-red-500/20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-red-500/10 text-red-500">
                <ShieldAlert size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Apple Guideline 1.2 Compliance: Zero Tolerance for Objectionable Content
                </h2>
                <p className="text-xs text-muted">
                  Strict standards governing real-time chat, profile media, and community discussions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-surface border border-border space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <Ban size={16} className="text-red-500" />
                  <span>Zero Tolerance Policy</span>
                </div>
                <p className="text-muted leading-relaxed">
                  There is strictly zero tolerance for abusive, defamatory, harassing, sexually explicit, hateful, or illegal content within any Loop chat channel, message thread, or event posting.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-border space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <Flag size={16} className="text-accent" />
                  <span>In-App Report Mechanism</span>
                </div>
                <p className="text-muted leading-relaxed">
                  Every message bubble and member profile features an immediate <strong>&quot;Report Inappropriate Content&quot;</strong> option. Reports are flagged directly to organizational administrators and our moderation team.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-border space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <Clock size={16} className="text-primary" />
                  <span>24-Hour Enforcement SLA</span>
                </div>
                <p className="text-muted leading-relaxed">
                  Reported content is audited within <strong>24 hours</strong>. Offending material is promptly removed, and violating user accounts are immediately suspended or permanently banned.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Sections */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-12">
            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">1. Acceptance of Terms &amp; Standard Apple EULA</h3>
              <p className="text-sm text-muted leading-relaxed">
                By downloading, installing, or logging into the Loop App or Loop Workspace, you agree to be bound by these Terms of Service as well as Apple&apos;s standard Licensed Application End User License Agreement (EULA). If you do not agree to these terms, you must discontinue use and delete the application immediately.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">2. User-Generated Content (UGC) &amp; Code of Conduct</h3>
              <p className="text-sm text-muted leading-relaxed">
                Loop allows members to post messages, upload event flyers, create initiative proposals, and share club archives. You retain ownership of your user-generated content, but by uploading you grant your enrolled organization and Loop a non-exclusive license to host, display, and archive that content in connection with organizational operations.
              </p>
              <div className="p-6 rounded-2xl bg-surface border border-border space-y-2 text-sm text-muted">
                <h4 className="font-bold text-foreground">You strictly agree that you will not:</h4>
                <ul className="list-disc list-inside space-y-1.5 leading-relaxed text-xs">
                  <li>Post hate speech, threatening statements, bullying remarks, or harassment targeted at any individual or student group.</li>
                  <li>Upload copyrighted material without appropriate permissions or institutional rights.</li>
                  <li>Attempt to compromise or spoof the anti-proxy 15-second rotating QR attendance token generation.</li>
                  <li>Impersonate club officers, faculty advisors, university deans, or central administrators.</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">3. Member Blocking &amp; Moderation Tools</h3>
              <p className="text-sm text-muted leading-relaxed">
                In compliance with Apple App Review Guidelines, the Loop mobile app includes built-in blocking controls:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted">
                <div className="p-4 rounded-xl bg-surface border border-border space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-foreground">
                    <UserX size={16} className="text-primary" />
                    <span>User Blocking</span>
                  </div>
                  <p>
                    Long-press any user profile or message bubble to select <strong>&quot;Block User&quot;</strong>. Once blocked, all direct communications and notifications from that user will be instantly silenced on your device.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-foreground">
                    <Flag size={16} className="text-accent" />
                    <span>Report Ticket Dispatch</span>
                  </div>
                  <p>
                    Selecting <strong>&quot;Report Message&quot;</strong> dispatches a cryptographic snapshot of the violating message to the institution&apos;s Superadmin dashboard for immediate review and deletion.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">4. Account Termination &amp; In-App Deletion</h3>
              <p className="text-sm text-muted leading-relaxed">
                Members may terminate their agreement at any time by executing the in-app account deletion flow located under <em>Profile &rarr; Account Security &rarr; Delete Account</em>. Institutional administrators reserve the right to revoke account access, suspend memberships, or ban users who violate campus codes of conduct or these terms.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">5. Disclaimer of Warranties &amp; Limitation of Liability</h3>
              <p className="text-sm text-muted leading-relaxed">
                Loop is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranty of any kind. While our automated sequential approval workflows and venue conflict locks are engineered to eliminate organizational clashes, Loop is not responsible for offline scheduling disputes, room lockouts, or administrative disciplinary matters within participating institutions.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">6. Contact Information</h3>
              <p className="text-sm text-muted leading-relaxed">
                For questions regarding these Terms of Service or to submit a formal legal notice, please contact:
              </p>
              <div className="p-4 rounded-xl bg-surface border border-border text-xs text-foreground font-mono">
                Legal &amp; Compliance Team &bull; Loop Technologies Inc. &bull; <a href="mailto:legal@loopapp.com" className="text-primary hover:underline">legal@loopapp.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

