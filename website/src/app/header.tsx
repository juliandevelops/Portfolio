"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.navBrand}>
          Julian Schumacher<span className={styles.brandDot}>.</span>
        </Link>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          id="site-menu"
          className={`${styles.navList} ${isOpen ? styles.navOpen : ""}`}
        >
          <li>
            <Link href="/work/" onClick={handleLinkClick}>Work</Link>
          </li>
          <li>
            <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
          </li>
          <li>
            <Link href="/contact/" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
