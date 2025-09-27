"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const nav = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll & focus the close button when opening
  useEffect(() => {
    const { body } = document;
    if (open) {
      const prevOverflow = body.style.overflow;
      body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
      return () => { body.style.overflow = prevOverflow; };
    }
  }, [open]);

  // Escape key closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo}>
          Cloud Tek Computing
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.listRow}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${pathname === item.href ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className={styles.mobileToggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      {/* Scrim (click to close) */}
      <div
        className={`${styles.scrim} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile drawer */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`${styles.drawer} ${open ? styles.open : ""}`}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Menu</span>
          <button
            ref={closeBtnRef}
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className={styles.listCol}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.mLink} ${pathname === item.href ? styles.active : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}
