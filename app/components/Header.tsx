'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/clients', label: 'Clients' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu when route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close on Escape and on outside click
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(t) &&
        buttonRef.current &&
        !buttonRef.current.contains(t)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onClick);
    };
  }, [open]);

  return (
    <header className="nav" style={{ background: 'rgba(255,255,255,.8)' }}>
      <div className="container nav-inner">
        {/* Logo / brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '.6rem', textDecoration: 'none' }}>
          <div style={{ height: 36, width: 36, borderRadius: 16, background: 'linear-gradient(135deg,#38bdf8,#6366f1)' }} />
          <span style={{ fontWeight: 700, whiteSpace: 'nowrap', color: '#0f172a' }}>
            Cloud Tek <span style={{ color: '#4f46e5' }}>Computing</span> LLC
          </span>
        </Link>

        {/* Desktop nav (visibility controlled purely by CSS media queries) */}
        <nav className="desktop-nav" style={{ gap: '2rem', alignItems: 'center' }}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="btn" style={{ textDecoration: 'none' }}>
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger (hidden on desktop via CSS) */}
        <button
          ref={buttonRef}
          onClick={() => setOpen(v => !v)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          type="button"
          title="Menu"
        >
          {/* Simple hamburger icon (accessible) */}
          <span aria-hidden="true" style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ width: 20, height: 2, background: '#0f172a', display: 'block' }} />
            <span style={{ width: 20, height: 2, background: '#0f172a', display: 'block' }} />
            <span style={{ width: 20, height: 2, background: '#0f172a', display: 'block' }} />
          </span>
        </button>
      </div>

      {/* Mobile dropdown (hidden by default; shown when .open is added) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`container mobile-menu ${open ? 'open' : ''}`}
        style={{ paddingBottom: '.75rem' }}
      >
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
          {nav.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className="btn"
              style={{ textAlign: 'left' }}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
