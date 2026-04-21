import { type ClassValue, clsx } from "clsx";

/**
 * Merge Tailwind class names safely with clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Smooth-scroll to an element by selector (e.g. "#hero").
 */
export function scrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
