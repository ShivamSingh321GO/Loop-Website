"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import DemoModal from "@/components/ui/DemoModal";

interface DemoModalContextType {
  openDemo: () => void;
  closeDemo: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDemo = () => setIsOpen(true);
  const closeDemo = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider value={{ openDemo, closeDemo }}>
      {children}
      <DemoModal isOpen={isOpen} onClose={closeDemo} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}

