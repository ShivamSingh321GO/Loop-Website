// ============================================================
// LOOP WEBSITE — Master Content Outline
// ============================================================
// This file holds ALL text, section metadata, and structured data
// for the Loop marketing website. Components import from here —
// keeping copy separate from layout for easy iteration.
// ============================================================

// ─── Brand Identity ──────────────────────────────────────────

export const brand = {
  name: "Loop",
  tagline: "The Organization OS",
  fullTagline: "Decentralized execution. Centralized governance. Zero friction.",
  description:
    "Loop replaces scattered group chats, lost paperwork, and scheduling conflicts with a single, secure operating system for your entire organization.",
};

// ─── Navigation ──────────────────────────────────────────────

export const navigation = {
  links: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "For Universities", href: "/universities" },
    { label: "For Organizations", href: "/organizations" },
    { label: "Privacy & Security", href: "/privacy-security" },
  ],
  cta: { label: "Request Demo", href: "#demo" },
};

// ─── Hero Section ────────────────────────────────────────────

export const hero = {
  pill: "Introducing Loop • The Organization Operating System",
  headline: "The Operating System for Modern Organizations, Communities & Clubs.",
  subheadline:
    "Structure your hierarchy, automate multi-stage approvals, safeguard member privacy with client-side encryption, and empower decentralized teams — all in one unified platform.",
  primaryCta: { label: "Book an Organization Demo", href: "#demo" },
  secondaryCta: { label: "Explore the Loop Mobile App", href: "#app" },
  stats: [
    { value: "100%", label: "Paperless Approvals" },
    { value: "15s", label: "Cryptographic QR Refresh" },
    { value: "5-Tier", label: "Custom Hierarchy" },
    { value: "AES-256", label: "Sealed Data" },
  ],
};

// ─── Dual Product Toggle ─────────────────────────────────────

export const dualProduct = {
  sectionTitle: "Two Unified Experiences. One Platform.",
  tabs: [
    {
      id: "app",
      label: "Loop App",
      subtitle: "For Members & Leads",
      description:
        "An intuitive, role-adaptive mobile hub for members, unit leads, committee heads, and executive directors to discover initiatives, collaborate in encrypted channels, execute tasks, and check into events.",
      highlights: [
        "Event discovery & registration",
        "End-to-end encrypted chat",
        "Task delegation boards",
        "Dynamic solo & team forms",
        "15-second rotating QR check-ins",
        "Role-adaptive 6-mode navigation",
      ],
    },
    {
      id: "workspace",
      label: "Loop Workspace",
      subtitle: "For Executives & Admins",
      description:
        "A unified web command center for institutional leadership, operations directors, and central administrators to configure hierarchical tiers, automate multi-category sequential approvals, manage physical venues, and govern organization-wide feature toggles.",
      highlights: [
        "5-level hierarchy builder",
        "4-category sequential approvals",
        "Venue conflict management",
        "Bulk CSV onboarding",
        "Real-time feature kill-switches",
        "Global broadcast megaphone",
      ],
    },
  ],
};

// ─── Core Features Grid (9 Cards) ───────────────────────────

export const features = {
  sectionTitle: "Everything Your Organization Needs",
  sectionSubtitle:
    "Nine powerful capabilities engineered to replace fragmented tools with one unified system.",
  items: [
    {
      icon: "Layers",
      title: "Configurable Multi-Tier Hierarchy",
      description:
        "Model your organization the way it actually runs — configure departments, chapters, councils, or sub-teams with custom leadership designations at every level.",
    },
    {
      icon: "GitBranch",
      title: "Multi-Stage Sequential Approvals",
      description:
        "Route events, budgets, equipment, and venues through custom sequential pipelines automatically — multi-stage sign-offs without chasing signatures.",
    },
    {
      icon: "CalendarCheck",
      title: "Conflict-Free Venue Booking",
      description:
        "Never deal with a double-booked hall again — automated facility reservation locks prevent scheduling overlaps across all spaces.",
    },
    {
      icon: "QrCode",
      title: "Anti-Proxy Rotating QR Attendance",
      description:
        "Dynamic 15-second rotating cryptographic tokens make attendance fraud technically impossible — anti-proxy QR check-ins in under 2 seconds.",
    },
    {
      icon: "FileText",
      title: "Smart Dynamic Registration Forms",
      description:
        "Build custom solo & team registration flows with capacity controls, document uploads, and automatic event chat enrollment.",
    },
    {
      icon: "Lock",
      title: "End-to-End Encrypted Chat",
      description:
        "On-device encryption before data ever touches the cloud — sensitive member PII and chat channels are sealed with AES-GCM HKDF keys.",
    },
    {
      icon: "ListTodo",
      title: "Cross-Unit Task Delegation",
      description:
        "Assign tasks with due dates, priority tags, and real-time progress tracking from To Do through In Progress to Completed.",
    },
    {
      icon: "Megaphone",
      title: "Organization-Wide Broadcasts",
      description:
        "Publish high-priority notices with visual alert badges that pin directly to every member's home feed across the entire organization.",
    },
    {
      icon: "ToggleRight",
      title: "Real-Time Feature Kill-Switches",
      description:
        "Instant administrative control at scale — toggle features like chats or financial requests on or off with real-time sync, zero app restarts.",
    },
  ],
};

// ─── How It Works (Steps) ────────────────────────────────────

export const howItWorks = {
  sectionTitle: "Up and Running in Minutes",
  sectionSubtitle:
    "From initial setup to full organizational deployment — Loop gets you operational fast.",
  steps: [
    {
      step: "01",
      title: "Define Your Structure",
      description:
        "Configure your multi-level hierarchy with custom tier names, leadership designations, and member quotas.",
    },
    {
      step: "02",
      title: "Set Approval Workflows",
      description:
        "Build sequential approval pipelines for events, budgets, resources, and venues with dynamic leader resolution.",
    },
    {
      step: "03",
      title: "Onboard Your Team",
      description:
        "Invite members individually or bulk-import entire organizations via CSV with predefined roles and affiliations.",
    },
    {
      step: "04",
      title: "Go Live",
      description:
        "Members download the Loop App, discover events, collaborate in encrypted channels, and check in with rotating QR codes.",
    },
  ],
};

// ─── Industries / Use Cases ──────────────────────────────────

export const industries = {
  sectionTitle: "Built for Every Structured Community",
  sectionSubtitle:
    "Loop's modular architecture adapts to diverse organizational structures while retaining deep domain power.",
  items: [
    {
      id: "universities",
      icon: "GraduationCap",
      title: "Universities & Campus Clubs",
      tagline: "The Complete Campus Life Operating System",
      description:
        "From club fests and hackathons to paperless faculty approvals and anti-proxy attendance — empower student leaders and relieve campus administrators.",
      levels: "Council → Club → Department → Project Team",
      highlights: [
        "Paperless event & budget approvals",
        "Auditorium & venue scheduler",
        "Rotating QR attendance for credits",
        "Club portfolio & leadership transition",
      ],
    },
    {
      id: "nonprofits",
      icon: "Heart",
      title: "Non-Profits & NGOs",
      tagline: "Effortless Governance for Distributed Communities",
      description:
        "Give regional chapters and volunteer networks the autonomy to thrive, backed by centralized governance, compliance, and budget tracking.",
      levels: "National Board → Regional Chapter → Local Branch → Volunteers",
      highlights: [
        "Multi-level chapter hierarchy",
        "Expense & asset sign-offs",
        "Volunteer coordination",
        "Instant CSV bulk provisioning",
      ],
    },
    {
      id: "enterprise",
      icon: "Building2",
      title: "Corporate Enterprises & ERGs",
      tagline: "Enterprise Culture Without the Chaos",
      description:
        "Dedicated community spaces separated from daily ticket work — ERG leads submit budgets and room requisitions straight through the corporate approval pipeline.",
      levels: "Enterprise → Business Unit → ERG / Guild → Working Group",
      highlights: [
        "Separated culture spaces",
        "Internal budget & offsite approvals",
        "Confidential encrypted safe spaces",
        "Cross-departmental innovation clubs",
      ],
    },
    {
      id: "professional",
      icon: "Award",
      title: "Professional Societies",
      tagline: "Modern Infrastructure for Modern Associations",
      description:
        "Rotating QR verification for credentialed attendance at technical symposiums, nested special interest groups, and cross-chapter announcements.",
      levels: "Association → State Chapter → SIG → Committee",
      highlights: [
        "Continuing education check-ins",
        "Special Interest Groups (SIGs)",
        "Cross-chapter announcements",
        "Member credential tracking",
      ],
    },
    {
      id: "incubators",
      icon: "Rocket",
      title: "Innovation Hubs & Communities",
      tagline: "Coordinate, Collaborate, Create",
      description:
        "Manage equipment reservations, coordinate demo days, mentor office hours, and collaborative hackathons with dynamic registration forms.",
      levels: "Network → City Hub → Cohort / Domain → Project Pod",
      highlights: [
        "Equipment & space reservations",
        "Demo day coordination",
        "Mentor scheduling",
        "Cohort management",
      ],
    },
  ],
};

// ─── Role Explorer ───────────────────────────────────────────

export const roles = {
  sectionTitle: "Tailored for Every Stakeholder",
  sectionSubtitle:
    "Loop automatically adapts its interface based on who's logged in — from new members to organization presidents.",
  items: [
    {
      role: "Guest / Public Member",
      primaryScreen: "Discovery Feed",
      capabilities:
        "Browse verified events, explore clubs/units, register for initiatives, and view personal calendar.",
      icon: "User",
    },
    {
      role: "Subgroup Member",
      primaryScreen: "Unit Home & Tasks",
      capabilities:
        "Access team tasks, participate in unit chat channels, access shared documents, and mark attendance.",
      icon: "Users",
    },
    {
      role: "Club / Unit Lead",
      primaryScreen: "Operations Command",
      capabilities:
        "Draft events, submit itemized budgets/resources, delegate tasks, generate QR attendance, and manage media.",
      icon: "Crown",
    },
    {
      role: "Advisor / Faculty",
      primaryScreen: "Review & Advisory",
      capabilities:
        "Review event proposals, audit itemized resource lists, guide leads, and add structured feedback remarks.",
      icon: "BookOpen",
    },
    {
      role: "President / Group Lead",
      primaryScreen: "Executive Oversight",
      capabilities:
        "Review organizational budgets, approve major events, oversee all nested clubs, and communicate with leadership.",
      icon: "Shield",
    },
    {
      role: "Org Admin / Operations",
      primaryScreen: "Logistics & Facilities",
      capabilities:
        "Resolve venue requests, coordinate event technical requirements, and monitor system-wide activity.",
      icon: "Settings",
    },
  ],
};

// ─── Security Section ────────────────────────────────────────

export const security = {
  sectionTitle: "Enterprise Security. Privacy by Design.",
  sectionSubtitle:
    "Loop was engineered with zero-trust principles from day one — your data stays sealed, always.",
  pillars: [
    {
      icon: "ShieldCheck",
      title: "Client-Side Data Sealing",
      description:
        "Sensitive member fields are encrypted on the physical device using AES-GCM before transmission. Even with complete database access, plaintext PII is unreadable.",
    },
    {
      icon: "Key",
      title: "Deterministic Channel Encryption",
      description:
        "Every chat room derives an isolated 256-bit symmetric encryption key via HKDF-SHA256. Cloud databases store only encrypted ciphertext.",
    },
    {
      icon: "Database",
      title: "Row-Level Security (RLS)",
      description:
        "PostgreSQL tables enforce database-level access rules — users can never query rows outside their enrolled groups or public feeds.",
    },
    {
      icon: "Timer",
      title: "Time-Decay QR Codes",
      description:
        "Dynamic 15-second rotating cryptographic attendance tokens prevent fraudulent proxy check-ins.",
    },
    {
      icon: "Globe",
      title: "Verified Email Domains",
      description:
        "Domain whitelisting prevents unauthorized accounts from joining institutional instances.",
    },
  ],
  badges: [
    "AES-GCM Encryption",
    "FERPA / GDPR Aligned",
    "Domain Whitelisting",
    "Zero-Trust Storage",
  ],
};

// ─── CTA Banner ──────────────────────────────────────────────

export const ctaBanner = {
  headline: "Ready to bring structure, speed, and security to your organization?",
  subheadline:
    "Join the next generation of organizations running on Loop.",
  primaryCta: { label: "Request Institutional Onboarding", href: "#demo" },
  secondaryCta: { label: "Download on App Store", href: "#" },
};

// ─── Footer ──────────────────────────────────────────────────

export const footer = {
  tagline: "Built for modern organizations, driven by communities.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Loop App (iOS)", href: "/#app" },
        { label: "Loop Workspace", href: "/#app" },
        { label: "Features", href: "/#features" },
        { label: "Support & Help Desk", href: "/support" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Higher Education", href: "/universities" },
        { label: "Campus Student Clubs", href: "/universities" },
        { label: "Non-Profits & NGOs", href: "/organizations" },
        { label: "Corporate ERGs", href: "/organizations" },
      ],
    },
    {
      title: "Privacy & App Store",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service (EULA)", href: "/terms" },
        { label: "In-App Account Deletion", href: "/privacy" },
        { label: "Support Center", href: "/support" },
      ],
    },
    {
      title: "Security & Legal",
      links: [
        { label: "Privacy & Security Hub", href: "/privacy-security" },
        { label: "Zero-Trust Architecture", href: "/security" },
        { label: "CryptoKit AES-GCM", href: "/security" },
        { label: "EAR 740.17(b)(1) Exempt", href: "/security" },
      ],
    },
  ],
};

