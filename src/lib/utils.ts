import { clsx, type ClassValue } from "clsx";

// Lightweight cn() without tailwind-merge for now
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

