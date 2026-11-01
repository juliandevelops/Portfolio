import { useSyncExternalStore } from "react";

export type ConsentValue = "all" | "essential";

export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-change";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "all" || value === "essential" ? value : null;
}

export function setConsent(value: ConsentValue): void {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function resetConsent(): void {
  window.localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

function subscribeConsent(callback: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Returns the stored consent, or null if no decision has been made yet.
 * During SSR "essential" is assumed so the banner does not appear in the
 * server HTML; after hydration the actual value is picked up.
 */
export function useConsent(): ConsentValue | null {
  return useSyncExternalStore(subscribeConsent, getConsent, () => "essential" as ConsentValue);
}
