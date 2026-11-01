"use client";

import type { ReactNode } from "react";
import { useConsent } from "./consent";

type ConsentGateProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

/**
 * Renders children only once consent ("all") has been given.
 * Used e.g. for Vercel Speed Insights.
 */
export default function ConsentGate({ children, fallback }: ConsentGateProps) {
  const allowed = useConsent() === "all";

  return <>{allowed ? children : (fallback ?? null)}</>;
}
