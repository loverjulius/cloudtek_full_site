export default function ClientsPage() {
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
}
