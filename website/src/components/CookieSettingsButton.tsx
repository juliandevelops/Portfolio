"use client";

import { resetConsent } from "./consent";

/**
 * Footer button that deletes the stored consent
 * and shows the cookie banner again.
 */
export default function CookieSettingsButton() {
  return (
    <button type="button" onClick={() => resetConsent()}>
      Cookie settings
    </button>
  );
}
