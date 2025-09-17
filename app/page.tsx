'use client';

import { useState } from "react";
import Image from "next/image";
import { Check, Shield, Award, Globe2, Cpu, Cloud as CloudIcon, Layers, BadgeCheck, FileBadge2, Menu, Phone, Mail, MapPin, Rocket } from "lucide-react";

const nav = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "certs", label: "Certifications" },
  { id: "contracts", label: "Contracts" },
  { id: "contact", label: "Contact" },
] as const;

function AnchorNav() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div style={{display:'flex',alignItems:'center',gap:'0.6rem'}}>
          <div style={{height:36,width:36,borderRadius:16,background:'linear-gradient(135deg,#38bdf8,#6366f1)'}}/>
          <span style={{fontWeight:600}}>Cloud Tek <span style={{color:'#4f46e5'}}>Computing</span> LLC</span>
        </div>
        <nav style={{display:'none'}} className="desktop-nav"></nav>
        <button onClick={() => setOpen(v => !v)} className="btn">Menu</button>
      </div>
      {open && (
        <div className="container" style={{paddingBottom:'1rem'}}>
          <div className="grid grid-2" style={{paddingTop:'0.5rem'}}>
            {nav.map(n => (
              <button key={n.id} onClick={() => go(n.id)} className="btn">{n.label}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <Image src="/images/hero-bg.jpg" alt="" fill priority className="hero-bg" />
      <div className="container" style={{position:'relative'}}>
        <div className="grid grid-2" style={{alignItems:'center',gap:'2rem'}}>
          <div>
            <span className="badge"><BadgeCheck size={16}/> Virginia-based, Woman-Owned Small Business</span>
            <h1 style={{marginTop:'0.75rem',fontSize:'clamp(28px,4vw,44px)',fontWeight:700}}>Modernize critical systems. Deliver mission results.</h1>
            <p className="text-muted" style={{marginTop:'0.75rem',fontSize:'18px',lineHeight:1.6}}>
              Cloud Tek Computing helps U.S. federal programs—especially revenue and public-facing missions—move from legacy platforms
              to secure, cloud-native architectures. We pair deep mainframe expertise with hands-on AWS engineering to ship outcomes
              that withstand filing seasons, audits, and scale.
            </p>
            <div style={{display:'flex',gap:'0.75rem',marginTop:'1rem'}}>
              <a href="#contact" className="btn btn-primary">Start a conversation</a>
              <a href="#services" className="btn">Explore services</a>
            </div>
            <ul style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'0.5rem',marginTop:'1rem',fontSize:'14px'}} className="text-muted">
              {["Mainframe → Java on AWS EKS","Event-Driven (Kafka/MSK)","MongoDB & DynamoDB"].map(t => (
                <li key={t} style={{display:'flex',alignItems:'center',gap:'0.4rem'}}><Check size={16}/> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="card">
              <div className="card-header" style={{display:'flex',alignItems:'center',gap:'0.5rem'}}><Shield size={18}/> Mission-critical, audit-ready delivery</div>
              <div className="card-body" style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:'0.75rem',fontSize:'14px'}}>
                {[
                  { h: "Experience", v: "19+ years in federal systems; 99.9% filing-season uptime" },
                  { h: "Cloud", v: "AWS EKS, MSK (Kafka), DynamoDB, IAM guardrails" },
                  { h: "Data", v: "MongoDB, streaming/ETL, Oracle → cloud migrations" },
                  { h: "Governance", v: "FISMA/NIST; GAO & TIGTA audit support" },
                ].map(card => (
                  <div key={card.h} className="card" style={{borderRadius:'1rem'}}>
                    <div className="card-body">
                      <div style={{fontSize:'12px'}} className="text-muted">{card.h}</div>
                      <div style={{fontWeight:600,marginTop:4}}>{card.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="logo-strip" style={{marginTop:'1.25rem'}}>
          {[
            {src:'/images/logo-sam.png',alt:'SAM.gov'},
            {src:'/images/logo-cage.png',alt:'CAGE'},
            {src:'/images/logo-wosb.png',alt:'WOSB/EDWOSB'},
            {src:'/images/logo-aws.png',alt:'AWS'}
          ].map(l => (
            <div key={l.alt} className="logo-cell">
              <Image src={l.src} alt={l.alt} fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { title: "Cloud & Containers", desc: "AWS architecture, EKS clusters, landing zones, IAM guardrails, IaC, GitOps.", img: "/images/service-cloud.jpg", icon: <CloudIcon size={16}/> },
    { title: "Legacy Modernization", desc: "ALC → Java microservices, API enablement, strangler patterns, batch → event-driven.", img: "/images/service-modern.jpg", icon: <BadgeCheck size={16}/> },
    { title: "Data & Integration", desc: "Kafka/MSK streams, real-time ETL, MongoDB/DynamoDB design, Oracle/DB2 migrations.", img: "/images/service-data.jpg", icon: <Cpu size={16}/> },
    { title: "Platform Engineering", desc: "CI/CD, observability (logs/metrics/traces), cost governance, SRE, secure SDLC.", img: "/images/service-platform.jpg", icon: <Layers size={16}/> },
  ] as const;
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem'}}>
          <div>
            <h2 style={{fontSize:'28px',fontWeight:700}}>Services</h2>
            <p className="text-muted" style={{marginTop:6}}>Strategy through secure operations — delivered by practitioners who’ve run Filing Seasons.</p>
          </div>
          <Rocket size={36} color="#4f46e5" style={{display:'none'}}/>
        </div>
        <div className="grid grid-4" style={{marginTop:'1rem'}}>
          {items.map(s => (
            <div key={s.title} className="card">
              <div style={{position:'relative',height:160,overflow:'hidden'}}>
                <Image src={s.img} alt={s.title} fill style={{objectFit:'cover'}}/>
              </div>
              <div className="card-header" style={{display:'flex',alignItems:'center',gap:8}}>
                <span className="badge">{s.icon}</span> {s.title}
              </div>
              <div className="card-body"><p className="text-muted" style={{fontSize:'14px'}}>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const tiles = [
    { title: "Federal Civilian (IRS/Treasury)", text: "Revenue systems, entity/tax modules, secure data flows, filing-season reliability.", img: "/images/ind-federal.jpg" },
    { title: "Defense & National Security", text: "Resilient, zero-trust-aligned platforms for sensitive workloads.", img: "/images/ind-defense.jpg" },
    { title: "Healthcare & Public Health", text: "Data interoperability, privacy-first analytics, real-time reporting.", img: "/images/ind-health.jpg" },
    { title: "Education & State/Local", text: "Modern learning systems, dashboards, and cost-efficient cloud ops.", img: "/images/ind-education.jpg" },
  ] as const;
  return (
    <section id="industries" className="section" style={{background:'#f8fafc'}}>
      <div className="container">
        <h2 style={{fontSize:'28px',fontWeight:700}}>Industries & Experience</h2>
        <p className="text-muted" style={{marginTop:6}}>Deep domain expertise in IRS programs with cross-agency collaboration and audit-ready processes.</p>
        <div className="grid grid-4" style={{marginTop:'1rem'}}>
          {tiles.map(t => (
            <div key={t.title} className="card" style={{overflow:'hidden'}}>
              <div style={{position:'relative',height:140}}><Image src={t.img} alt={t.title} fill style={{objectFit:'cover'}}/></div>
              <div className="card-body">
                <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:600}}><Globe2 size={16}/> {t.title}</div>
                <p className="text-muted" style={{marginTop:6,fontSize:'14px'}}>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    "Virginia LLC – Active",
    "SAM.gov Registered (UEI: YOUR-UEI)",
    "CAGE: YOUR-CAGE",
    "Woman-Owned Small Business (WOSB/EDWOSB) – pursuing",
  ] as const;
  return (
    <section id="certs" className="section">
      <div className="container">
        <h2 style={{fontSize:'28px',fontWeight:700}}>Certifications & Quality</h2>
        <p className="text-muted" style={{marginTop:6}}>Security, compliance, and delivery discipline are built into how we work — FISMA/NIST alignment and GAO/TIGTA audit support from day one.</p>
        <div className="grid grid-4" style={{marginTop:'1rem'}}>
          {certs.map(c => (
            <div key={c} className="card"><div className="card-body" style={{display:'flex',gap:8,alignItems:'flex-start',fontSize:'14px'}}><Award size={16}/> <span>{c}</span></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contracts() {
  const naics = ["541512 – Computer Systems Design Services","541519 – Other Computer Related Services","518210 – Data Processing, Hosting, and Related"] as const;
  const past = ["IRS: Mainframe ALC → Java microservices on AWS EKS","Enterprise data migration: Oracle → MongoDB/DynamoDB","Kafka/MSK event pipelines with secure, high-throughput processing"] as const;
  return (
    <section id="contracts" className="section" style={{background:'#f8fafc'}}>
      <div className="container">
        <h2 style={{fontSize:'28px',fontWeight:700}}>Government Contracting</h2>
        <div className="grid grid-3" style={{marginTop:'1rem'}}>
          <div className="card">
            <div className="card-header"><FileBadge2 size={16}/> Vehicles & Awards</div>
            <div className="card-body text-muted" style={{fontSize:'14px'}}>
              <div style={{display:'flex',gap:8}}><BadgeCheck size={16}/> Add active GWACs/BPAs here once awarded (e.g., 8(a) STARS III, OASIS+, etc.).</div>
              <div style={{marginTop:6,fontSize:'12px',color:'#64748b'}}>Only list vehicles you actually hold.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><FileBadge2 size={16}/> NAICS</div>
            <div className="card-body text-muted" style={{fontSize:'14px'}}>{naics.map(n => <div key={n}>{n}</div>)}</div>
          </div>
          <div className="card">
            <div className="card-header"><FileBadge2 size={16}/> Past Performance (selected)</div>
            <div className="card-body text-muted" style={{fontSize:'14px'}}>
              {past.map(p => <div key={p}>{p}</div>)}
              <div style={{marginTop:6,fontSize:'12px',color:'#64748b'}}>(Replace with contract identifiers and years as appropriate.)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
// simple client-side submit handler to open the default mail app
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const company = String(data.get('company') || '').trim();
    const message = String(data.get('message') || '').trim();

    const to = 'hello@cloudtekcomputing.com';
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid grid-2" style={{gap:'2rem'}}>
          <div>
            <h2 style={{fontSize:'28px',fontWeight:700}}>Let’s talk</h2>
            <p className="text-muted" style={{marginTop:6}}>Share your goals — we’ll respond within one business day.</p>
            <div style={{display:'grid',gap:'0.5rem',marginTop:'1rem',fontSize:'14px'}}>
              <div style={{display:'flex',gap:8,alignItems:'center'}}><Phone size={16}/> (XXX) XXX-XXXX</div>
              <div style={{display:'flex',gap:8,alignItems:'center'}}><Mail size={16}/> hello@cloudtekcomputing.com</div>
              <div style={{display:'flex',gap:8,alignItems:'center'}}><MapPin size={16}/> Springfield, Virginia</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Request a consultation</div>
            <div className="card-body">
              {/* Note: no action/method; we use onSubmit */}
              <form onSubmit={onSubmit} style={{display:'grid',gap:'0.6rem'}}>
                <input className="btn" placeholder="Full name" name="name" required />
                <input className="btn" type="email" placeholder="Work email" name="email" required />
                <input className="btn" placeholder="Company / Agency" name="company" />
                <textarea className="btn" placeholder="What problem are you trying to solve?" rows={4} name="message" required />
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
              <p className="text-muted" style={{marginTop:'0.5rem',fontSize:'12px'}}>
                This opens your email app with the message prefilled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'1rem'}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div style={{height:32,width:32,borderRadius:12,background:'linear-gradient(135deg,#38bdf8,#6366f1)'}}/>
          <span style={{fontWeight:600}}>Cloud Tek Computing LLC</span>
        </div>
        <div className="text-muted" style={{fontSize:'14px'}}>© {new Date().getFullYear()} Cloud Tek Computing LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div>
      <AnchorNav />
      <Hero />
      <Services />
      <Industries />
      <Certifications />
      <Contracts />
      <Contact />
      <Footer />
    </div>
  );
}
