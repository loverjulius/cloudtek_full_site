// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>

      {/* Hero / Intro (like Sparksoft’s About hero) */}
      <section className="section" style={{background:'#f8fafc', padding:'3.5rem 0'}}>
        <div className="container" style={{display:'grid', gap:'1rem', maxWidth:900}}>
                    <h1 style={{fontSize:'clamp(28px,4vw,44px)', fontWeight:700}}>About Cloud Tek Computing LLC</h1>
          <p className="text-muted" style={{fontSize:18, lineHeight:1.6}}>
            We modernize mission-critical federal systems — pairing deep mainframe knowledge with hands-on AWS delivery to
            move from legacy platforms to secure, event-driven, cloud-native architectures.
          </p>
        </div>
      </section>

      {/* Who we are (longer copy block) */}
      <section className="section">
        <div className="container" style={{display:'grid', gap:'1rem', maxWidth:900}}>
          <h2 style={{fontSize:28, fontWeight:700}}>Who we are</h2>
          <p className="text-muted" style={{lineHeight:1.7}}>
            Cloud Tek Computing LLC is a Virginia-based, woman-owned small business focused on results:
            resilient platforms, audit-ready delivery, and measurable outcomes for high-visibility programs.
            Our teams bring 19+ years of federal experience across revenue, data, security, and operations.
          </p>
        </div>
      </section>

      {/* Stats / Highlights (Sparksoft shows staff/locations counters) */}
      <section className="section" style={{background:'#f8fafc'}}>
        <div className="container grid grid-4">
          {[
            {h:'19+ yrs', t:'Federal delivery'},
            {h:'99.9%', t:'Filing-season uptime'},
            {h:'AWS', t:'EKS • MSK • DynamoDB'},
            {h:'FISMA/NIST', t:'GAO & TIGTA support'},
          ].map(x => (
            <div key={x.h} className="card">
              <div className="card-body" style={{textAlign:'center'}}>
                <div style={{fontSize:28, fontWeight:700}}>{x.h}</div>
                <div className="text-muted" style={{marginTop:4}}>{x.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values / Mission (Sparksoft features mission/values sections) */}
      <section className="section">
        <div className="container">
          <h2 style={{fontSize:28, fontWeight:700}}>Our values</h2>
          <div className="grid grid-3" style={{marginTop:'1rem'}}>
            {[
              {t:'Outcome-first', d:'We ship production outcomes that stand up to audits and scale.'},
              {t:'Security by design', d:'Guardrails, least privilege, automated checks from day one.'},
              {t:'Pragmatic modernization', d:'Strangler patterns, event-driven designs, measurable ROI.'},
            ].map(v => (
              <div key={v.t} className="card">
                <div className="card-body">
                  <div style={{fontWeight:600}}>{v.t}</div>
                  <p className="text-muted" style={{marginTop:6}}>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership grid (Sparksoft has a leadership section) */}
      <section className="section" style={{background:'#f8fafc'}}>
        <div className="container">
          <h2 style={{fontSize:28, fontWeight:700}}>Leadership</h2>
          <div className="grid grid-3" style={{marginTop:'1rem'}}>
            {[
              {name:'Your Name', role:'Founder & CEO', img:'/images/leader-1.jpg'},
              {name:'Exec Two', role:'Head of Delivery', img:'/images/leader-2.jpg'},
              {name:'Exec Three', role:'Chief Architect', img:'/images/leader-3.jpg'},
            ].map(p => (
              <article key={p.name} className="card" style={{overflow:'hidden'}}>
                <div style={{position:'relative', height:220}}>
                  <Image src={p.img} alt={p.name} fill style={{objectFit:'cover'}} />
                </div>
                <div className="card-body">
                  <div style={{fontWeight:600}}>{p.name}</div>
                  <div className="text-muted" style={{fontSize:14}}>{p.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Partners (Sparksoft lists certs & vehicles) */}
      <section className="section">
        <div className="container">
          <h2 style={{fontSize:28, fontWeight:700}}>Certifications & Partners</h2>
          <div className="logo-strip" style={{marginTop:'1rem'}}>
            {[
              {src:'/images/logo-sam.png', alt:'SAM.gov'},
              {src:'/images/logo-wosb.png', alt:'WOSB/EDWOSB'},
              {src:'/images/logo-aws.png', alt:'AWS Partner'},
              {src:'/images/logo-cage.png', alt:'CAGE'},
            ].map((l) => (
              <div key={l.alt} className="logo-cell">
                <Image src={l.src} alt={l.alt} fill />
              </div>
            ))}
          </div>
          <p className="text-muted" style={{marginTop:8, fontSize:12}}>
            Replace with your actual IDs/partners only. Don’t use marks you’re not authorized to display.
          </p>
        </div>
      </section>

      {/* Call to Action (Sparksoft ends with CTAs to contact/careers) */}
      <section className="section" style={{background:'#f8fafc'}}>
        <div className="container" style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
          <Link href="/contact" className="btn btn-primary">Talk to us</Link>
          <Link href="/careers" className="btn">Careers</Link>
        </div>
      </section>

    </main>
  );
}
