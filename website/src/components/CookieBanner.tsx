"use client";

import Link from "next/link";
import { setConsent, useConsent } from "./consent";
import styles from "./cookieBanner.module.scss";

export default function CookieBanner() {
  const consent = useConsent();

  if (consent !== null) return null;

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and consent notice"
    >
      <div className={styles.bannerText}>
        <p>
          This website does not use tracking cookies. We only load optional content
          (e.g. embedded YouTube videos) and statistics after you consent. Details in
          the <Link href="/legal/privacy">Privacy Policy</Link>.
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => setConsent("essential")}
        >
          Essential only
        </button>
        <button
          type="button"
          className={styles.primaryButton}
          onClick={() => setConsent("all")}
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
