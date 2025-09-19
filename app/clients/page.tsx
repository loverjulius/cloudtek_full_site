export default function ClientsPage() {
  const clients = [
    "U.S. Treasury / IRS (modernization support)",
    "Enterprise data migration projects",
    "Secure event-driven analytics platforms",
  ] as const;

  return (
    <main className="section" id="clients">
      <div className="container">
        <h1>Clients</h1>
        <p className="text-muted" style={{marginTop:8}}>Representative experience (replace with specific agencies and contracts as permitted).</p>
        <ul className="text-muted" style={{marginTop:12, lineHeight:1.8}}>
          {clients.map(c => <li key={c}>• {c}</li>)}
        </ul>
      </div>
    </main>
  );
}
