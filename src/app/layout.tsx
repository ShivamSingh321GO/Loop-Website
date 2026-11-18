import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/context/DemoModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loop — The Organization Operating System",
  description:
    "Structure your hierarchy, automate multi-stage approvals, safeguard member privacy with client-side encryption, and empower decentralized teams — all in one unified platform.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  keywords: [
    "organization management",
    "club management",
    "student government",
    "approval workflow",
    "encrypted chat",
    "event management",
    "QR attendance",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}
