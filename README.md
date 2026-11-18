# Loop — The Organization Operating System

> **The modern operating system for institutions, universities, communities, and clubs.**  
> Unifies mobile member engagement with desktop administrative governance on one encrypted platform.

---

## ✨ Features

- **Dual-Platform Architecture**:
  - **Loop App (iOS)**: Encrypted chat, 15-second time-decay rotating QR check-ins, event discovery, dynamic forms, and 6-mode role navigation.
  - **Loop Workspace (Desktop Superadmin)**: Multi-stage sequential approval pipelines, hierarchical budget controls, auditorium/venue reservation locking, and CSV roster onboarding.
- **Client-Side Sealed Privacy**: Sensitive fields are encrypted on-device via AES-256 GCM before network transmission. Cloud databases store only unreadable ciphertext.
- **Enterprise Governance**: 5-tier organizational hierarchy (Institutions $\rightarrow$ Chapters $\rightarrow$ Units $\rightarrow$ Sub-groups $\rightarrow$ Members) with deterministic Row-Level Security (RLS).
- **Compliance & Transparency**: Built for Apple App Store Connect compliance (Guideline 5.1.1(v) account deletion, Guideline 1.2 UGC moderation, EAR 740.17(b)(1) encryption mass-market exemption).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Geist Sans & Geist Mono

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or later
- npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ShivamSingh321GO/Loop-Website.git
cd Loop-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

---

## 🗺️ Site Routes

| Route | Description |
| :--- | :--- |
| `/` | Landing page featuring Hero with 4K kinetic logo animation, interactive QR simulator, 4-step approval stepper, features grid, hierarchy visualizer, and role switcher |
| `/privacy-security` | Unified Trust Center (App Privacy Nutrition Label, Cryptography Architecture, App Store Compliance) |
| `/universities` | Campus life, student government, faculty advisors, and venue management |
| `/organizations` | Distributed non-profits, enterprise ERGs, and CSV roster onboarding |
| `/security` | Cryptographic specifications, AES-GCM 256, HKDF-SHA256, and zero-trust design |
| `/privacy` | Public Privacy Policy & App Store Nutrition breakdown |
| `/terms` | Terms of Service, EULA, and Guideline 1.2 UGC moderation policy |
| `/support` | Help Desk, Guideline 5.1.1(v) account deletion guide, and contact desk |

---

## 📄 License

Proprietary © 2026 Loop. All rights reserved.
