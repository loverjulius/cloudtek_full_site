import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Our Journey Forward */}
      <section className="section band">
        <div className="container">
          <div className="content-narrow">
            <h1 style={{fontSize:'clamp(28px,4vw,44px)', fontWeight:700}}>Our Journey Forward</h1>
            <p className="text-muted" style={{fontSize:18, lineHeight:1.6}}>
              <strong>Cloud Tek Computing LLC</strong> is a Virginia-based, Woman Operated Small Business dedicated 
              to helping U.S. federal agencies and mission-driven organizations modernize their IT 
              environments and deliver measurable results.
            </p>
            <p className="text-muted" style={{fontSize:18, lineHeight:1.6}}>
              We combine technical expertise, industry experience, and business knowledge to assess critical 
              challenges and devise effective solutions that can be implemented swiftly and cost-effectively.
            </p>
            <p className="text-muted" style={{fontSize:18, lineHeight:1.6}}>
              We are committed to consulting, educating, and collaborating with our clients to find the right IT
              solutions and services that support their strategic, technical, and organizational goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section">
        <div className="container">
          <div className="content-narrow">
            <h2 style={{fontSize:28, fontWeight:700}}>Our Mission</h2>
            <p className="text-muted" style={{fontSize:18, lineHeight:1.6}}>
              To empower agencies and their partners to achieve secure, efficient, and mission-driven outcomes 
              through modern IT solutions, data-driven insights, and reliable infrastructure services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section">
        <div className="container">
          <div className="content-narrow">
            <h2 style={{fontSize:28, fontWeight:700}}>Our Commitment</h2>
          </div>
          <div className="grid grid-3" style={{marginTop:'1rem'}}>
            {[
              {t:'Mission-Focused', d:'We align every solution with our clients’ mission and public service goals.'},
              {t:'Integrity & Accountability', d:'We act with transparency and deliver on our commitments.'},
              {t:'Security & Compliance', d:'We protect data and meet rigorous federal standards.'},
              {t:'Innovation & Collaboration', d:'We use modern technology and work closely with clients to achieve practical, scalable results.'},
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

{/* Certifications & Partners */}
<section className="section highlight">
  <div className="container">
    <div className="content-narrow">
      <h2 style={{ fontSize: 28, fontWeight: 700 }}>Certifications &amp; Partners</h2>
      <p className="text-muted" style={{ fontSize: 16, marginTop: '0.5rem' }}>
        Our industry certifications and trusted partners enable us to deliver secure,
        compliant, and innovative solutions.
      </p>
    </div>

    <div className="grid grid-3" style={{ marginTop: '1rem' }}>
      {[
        {
          t: 'Cloud Partners',
          d: 'AWS, Microsoft Azure, Google Cloud'
        },
        {
          t: 'Technology & Infrastructure',
          d: 'Cisco, Dell Technologies, VMware'
        },
        {
          t: 'Certifications (In-Progress)',
          d: 'We’re pursuing new certifications... '
        }
      ].map((v) => (
        <div key={v.t} className="card">
          <div className="card-body">
            <div style={{ fontWeight: 600 }}>{v.t}</div>
            <p className="text-muted" style={{ marginTop: 6 }}>{v.d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/*
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
      */}

      {/* Meet Our Experts */}
      <section className="section band">
        <div className="container">
          <h2 style={{fontSize:28, fontWeight:700}}>Meet Our Experts</h2>
          <p className="text-muted" style={{ fontSize: 16, marginTop: '0.5rem' }}>
        Our skilled consultants are committed to achieving client success.
      </p>
          <div className="grid grid-3" style={{marginTop:'1rem'}}>
            {[
              {name:'<Name>', role:'Chief Architect', img:'/images/leader-1.jpg'},
              {name:'<Name>', role:'Head of Cyber Security', img:'/images/leader-2.jpg'},
              {name:'<Name>', role:'Cloud Architect', img:'/images/leader-3.jpg'},
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


      {/* CTA */}
      <section className="section band">
        <div className="container" style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
          <Link href="/contact" className="btn btn-primary">Talk to us</Link>
          <Link href="/careers" className="btn">Careers</Link>
        </div>
      </section>
    </main>
  );
}
