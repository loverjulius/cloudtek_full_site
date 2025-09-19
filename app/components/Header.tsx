'use client';

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/clients', label: 'Clients' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav" style={{background:'rgba(255,255,255,.8)'}}>
      <div className="container nav-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'.6rem',textDecoration:'none'}}>
          <div style={{height:36,width:36,borderRadius:16,background:'linear-gradient(135deg,#38bdf8,#6366f1)'}} />
          <span style={{fontWeight:700,whiteSpace:'nowrap',color:'#0f172a'}}>
            Cloud Tek <span style={{color:'#4f46e5'}}>Computing</span> LLC
          </span>
        </Link>

        <nav className="desktop-nav" style={{display:'flex',gap:'2rem',alignItems:'center'}}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="btn" style={{textDecoration:'none'}}>
              {n.label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(v => !v)} className="mobile-menu-btn btn" aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {open && (
        <div className="container mobile-menu" style={{paddingBottom:'.75rem'}}>
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.5rem'}}>
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="btn" style={{textAlign:'left'}}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
