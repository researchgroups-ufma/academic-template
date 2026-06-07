/**
 * utils.ts — Utilitário para mesclar classes Tailwind CSS
 *
 * Usado pelos componentes do Motion Primitives para combinar
 * classes CSS sem conflitos.
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
