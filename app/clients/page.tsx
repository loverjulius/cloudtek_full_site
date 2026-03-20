export default function ClientsPage() /*{
  const cards = [
    {
      title: "We’re growing!",
      desc: "We are actively building partnerships with federal agencies and enterprise clients to deliver secure, scalable solutions.",
    },
    {
      title: "Client information coming soon",
      desc: "We’ll share details on our client engagements as we finalize new relationships and projects.",
    },
  ];

  return (
    <main className="section" id="clients">
      <div className="container clients">
        <header className="clients-hero">
          <h1>Our Clients</h1>
          <p className="text-muted">
            We partner with agencies and enterprises to modernize legacy systems,
            embrace cloud-native technologies, and deliver mission-driven outcomes.
          </p>
        </header>

        <div className="clients-grid">
          {cards.map((c) => (
            <article key={c.title} className="client-card">
              <h3>{c.title}</h3>
              <p className="text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}*/
{const cards = [
  {
    title: "Federal Agencies",
    desc: "Supporting mission modernization initiatives with secure, scalable cloud and application solutions aligned to federal standards.",
  },
  {
    title: "State & Local Government",
    desc: "Helping public sector organizations modernize systems, improve service delivery, and enhance operational efficiency.",
  },
  {
    title: "Prime Contractors",
    desc: "Partnering with system integrators as a reliable subcontractor to support delivery, modernization, and engineering efforts.",
  },
]

const highlights = [
  "Cloud & Application Modernization",
  "AWS / EKS Engineering",
  "Event-Driven Architecture (Kafka)",
  "DevSecOps & Secure Delivery",
]

return (
  <main className="section" id="clients">
    <div className="container clients">

      {/* Hero Section */}
      <header className="clients-hero" style={{ maxWidth: 900 }}>
        <h1>Clients & Partnerships</h1>
        <p className="text-muted" style={{ lineHeight: 1.7 }}>
          Cloud Tek Computing partners with government agencies, public sector organizations,
          and prime contractors to deliver secure, compliant, and mission-aligned technology solutions.
          We support modernization efforts across cloud, application development, and data platforms.
        </p>
      </header>

      {/* Who We Support */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Who We Support</h2>
        <div className="clients-grid">
          {cards.map((c) => (
            <article key={c.title} className="client-card">
              <h3>{c.title}</h3>
              <p className="text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

   
      {/* Positioning Statement */}
      <section style={{ marginTop: "2.5rem", maxWidth: 900 }}>
        <h2>Our Approach</h2>
        <p className="text-muted" style={{ lineHeight: 1.7 }}>
          We focus on delivering practical, outcome-driven solutions that align with mission needs.
          Our approach emphasizes security, scalability, and seamless integration with existing systems.
          We are structured to support both prime and subcontracting opportunities across federal,
          state, and local engagements.
        </p>
      </section>    
    </div>
  </main>
)}