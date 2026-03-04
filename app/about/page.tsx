import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Our Journey Forward */}
      <section className="section band">
        <div className="container">
          <div className="content-narrow">
            <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700 }}>
              Our Journey Forward
            </h1>
            <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.6 }}>
              <strong>Cloud Tek Computing LLC</strong> is a Virginia-based, Woman
              Operated Small Business dedicated to helping U.S. federal agencies
              and mission-driven organizations modernize their IT environments and
              deliver measurable results.
            </p>
            <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.6 }}>
              We combine technical expertise, industry experience, and business
              knowledge to assess critical challenges and devise effective
              solutions that can be implemented swiftly and cost-effectively.
            </p>
            <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.6 }}>
              We are committed to consulting, educating, and collaborating with
              our clients to find the right IT solutions and services that support
              their strategic, technical, and organizational goals.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="section highlight">
        <div className="container">
          <div className="content-narrow">
            <h2 style={{ fontSize: 28, fontWeight: 700 }}>
              Certifications &amp; Partners
            </h2>
            <p className="text-muted" style={{ fontSize: 16, marginTop: "0.5rem" }}>
              Our industry certifications and trusted partners enable us to deliver
              secure, compliant, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            {[
              {
                name: "Virginia SWaM Certification",
                role: "Certified Small, Women-owned, and Minority-owned",
                img: "/images/SWaM_logo.jpg",
                isLogo: true,
              },
                           
              {
                name: "Certifications",
                description: (
                  <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                    <li>SWaM Certified (Virginia Small, Women-owned, Minority-owned)</li>
                    <li>Active in Virginia eVA and state procurement systems</li>
                    <li>Expanding certifications to support federal contracting</li>
                  </ul>
                ),
              },
              {
                name: "Cloud Partners",
                description: "AWS, Microsoft Azure, Google Cloud",
              },
            ].map((v) => (
              <article key={v.name} className="card" style={{ overflow: "hidden" }}>
                {/* Copy of the “Meet Our Experts” logo card behavior */}
                {(v as any).isLogo ? (
                  <>
                    <div style={{ position: "relative", height: 220, background: "#fff" }}>
                      <Image
                        src={(v as any).img}
                        alt={v.name}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        style={{ objectFit: "contain", padding: 18 }}
                      />
                    </div>
                    <div className="card-body">
                      <div style={{ fontWeight: 600 }}>{v.name}</div>
                      <div className="text-muted" style={{ fontSize: 14 }}>
                        {(v as any).role}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="card-body">
                    <div style={{ fontWeight: 600 }}>{v.name}</div>
                    <div className="text-muted" style={{ marginTop: 6 }}>
                      {(v as any).description}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section">
        <div className="container">
          <div className="content-narrow">
            <h2 style={{ fontSize: 28, fontWeight: 700 }}>Our Commitment</h2>
          </div>

          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            {[
              {
                t: "Mission-Focused",
                d: "We align every solution with our clients’ mission and public service goals.",
              },
              {
                t: "Integrity & Accountability",
                d: "We act with transparency and deliver on our commitments.",
              },
              {
                t: "Security & Compliance",
                d: "We protect data and meet rigorous federal standards.",
              },
              {
                t: "Innovation & Collaboration",
                d: "We use modern technology and work closely with clients to achieve practical, scalable results.",
              },
            ].map((v) => (
              <div key={v.t} className="card">
                <div className="card-body">
                  <div style={{ fontWeight: 600 }}>{v.t}</div>
                  <p className="text-muted" style={{ marginTop: 6 }}>
                    {v.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Experts 
      <section className="section band">
        <div className="container">
          <h2 style={{ fontSize: 28, fontWeight: 700 }}>Meet Our Experts</h2>
          <p className="text-muted" style={{ fontSize: 16, marginTop: "0.5rem" }}>
            Our skilled consultants are committed to achieving client success.
          </p>

          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            {[
              { name: "<Name>", role: "Chief Architect", img: "/images/leader-1.jpg" },
              {
                name: "VA SWaM Certification",
                role: "Head of Cyber Security",
                img: "/images/SWaM_logo.jpg",
                isLogo: true,
              },
              { name: "<Name>", role: "Cloud Architect", img: "/images/leader-2.jpg" },
            ].map((p) => (
              <article key={p.name} className="card" style={{ overflow: "hidden" }}>
                <div
                  style={{
                    position: "relative",
                    height: 220,
                    background: (p as any).isLogo ? "#fff" : "transparent",
                  }}
                >
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    style={{
                      objectFit: (p as any).isLogo ? "contain" : "cover",
                      padding: (p as any).isLogo ? 18 : 0,
                    }}
                  />
                </div>

                <div className="card-body">
                  <div style={{ fontWeight: 600 }}>{p.name}</div>
                  <div className="text-muted" style={{ fontSize: 14 }}>
                    {p.role}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="section band">
        <div
          className="container"
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
        >
          <Link href="/contact" className="btn btn-primary">
            Talk to us
          </Link>
          <Link href="/careers" className="btn btn-primary">
            Careers
          </Link>
        </div>
      </section>
    </main>
  );
}