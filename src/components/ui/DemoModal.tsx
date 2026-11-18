"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Building, Mail, User, Shield } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orgType: "university",
    orgName: "",
    estimatedMembers: "100-500",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Ambient glow decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 p-2 rounded-full text-muted hover:text-foreground hover:bg-background/80 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="relative h-8 w-8 rounded-lg overflow-hidden border border-border shadow-xs shrink-0">
                      <Image
                        src="/Loop-logo.jpeg"
                        alt="Loop Logo"
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      <Shield size={12} />
                      <span>Institutional Onboarding</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Request an Organization Demo
                  </h3>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">
                    Discover how Loop unifies multi-tier hierarchies, automated approvals, and encrypted communications for your institution.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Alex Morgan / President"
                        className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Institutional / Work Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="leadership@institution.edu"
                        className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Organization Type
                      </label>
                      <select
                        value={formData.orgType}
                        onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="university">University / Campus</option>
                        <option value="nonprofit">Non-Profit / NGO</option>
                        <option value="enterprise">Enterprise / ERG</option>
                        <option value="society">Professional Society</option>
                        <option value="incubator">Incubator / Hub</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Estimated Members
                      </label>
                      <select
                        value={formData.estimatedMembers}
                        onChange={(e) => setFormData({ ...formData, estimatedMembers: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="under-100">&lt; 100 members</option>
                        <option value="100-500">100 - 500 members</option>
                        <option value="500-2000">500 - 2,000 members</option>
                        <option value="2000+">2,000+ members</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Organization / University Name
                    </label>
                    <div className="relative">
                      <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                      <input
                        type="text"
                        required
                        value={formData.orgName}
                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                        placeholder="Stanford University / ACM National"
                        className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 gradient-bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    <span>Schedule Executive Walkthrough</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/15 text-accent mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Demo Request Received!
                </h3>
                <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-foreground font-semibold">{formData.name}</span>. Our institutional deployment team will contact you at <span className="text-foreground font-semibold">{formData.email}</span> within 24 hours to coordinate your custom walkthrough.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="border border-border text-foreground font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-background transition-colors"
                  >
                    Back to Overview
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

