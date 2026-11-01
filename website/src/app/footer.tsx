import Link from "next/link";
import styles from "./footer.module.scss";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <p className={styles.footerTitle}>Julian Schumacher<span className={styles.brandDot}>.</span></p>
          <p className={styles.footerCopy}>© 2026 Julian Schumacher. All rights reserved.</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/status">Website status</Link>
          <Link href="/blog?tag=learnings">Learnings</Link>
          <Link href="/support">Support</Link>
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/imprint">Imprint</Link>
          <CookieSettingsButton />
          <Link href="mailto:support@juliandevelops.com?subject=Support Request [via Website]&body=[Support request triggered by website footer]">
            Support request
          </Link>
        </div>
      </div>
      <p className={styles.footerNote}>
        This site is still evolving. Thanks for stopping by.
      </p>
      <p className={styles.footerNote}>
        Generative AI was used to assist in the creation of this website.
      </p>
    </footer>
  );
}
