// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Check, Shield, BadgeCheck } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero section">
      <Image src="/images/hero-bg.jpg" alt="" fill priority className="hero-bg" />
      <div className="container" style={{position:'relative'}}>
        <div className="grid grid-2" style={{alignItems:'center',gap:'2rem'}}>
          <div>
            <span className="badge"><BadgeCheck size={16}/> Virginia-based, Woman-Owned Small Business</span>
            <h1 style={{marginTop:'0.75rem',fontSize:'clamp(28px,4vw,44px)',fontWeight:700}}>Modernize Critical Systems. Deliver Mission Results.</h1>
            <p className="text-muted" style={{marginTop:'0.75rem',fontSize:'18px',lineHeight:1.6}}>
              Cloud Tek Computing helps U.S. federal programs, especially revenue and public-facing missions—
              transition from legacy platforms to secure, cloud-native architectures. We pair decades of enterprise
              production-support expertise with modern AWS cloud engineering to ensure resilient, high-performing
              systems that scale.
            </p>
            <div style={{display:'flex',gap:'0.75rem',marginTop:'1rem'}}>
              <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
              
              <Link href="/services" className="btn btn-primary">Explore services</Link>
            </div>

            {/*<ul style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'0.5rem',marginTop:'1rem',fontSize:'14px'}} className="text-muted">
              {["Mainframe → Java on AWS EKS","Event-Driven (Kafka/MSK)","MongoDB & DynamoDB"].map(t => (
                <li key={t} style={{display:'flex',alignItems:'center',gap:'0.4rem'}}><Check size={16}/> {t}</li>
              ))}
            </ul>
            */}
          </div>
          
          {/*<div>
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
          */}
          {/*[
            {src:'/images/logo-sam.png',alt:'SAM.gov'},
            {src:'/images/logo-cage.png',alt:'CAGE'},
            {src:'/images/logo-wosb.png',alt:'WOSB/EDWOSB'},
            {src:'/images/logo-aws.png',alt:'AWS'}
          ].map(l => (
            <div key={l.alt} className="logo-cell">
              <Image src={l.src} alt={l.alt} fill />
            </div>
              ))*/}
          
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <Hero />
    </div>
  );
}
