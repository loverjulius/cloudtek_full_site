export default function ClientsPage() {
  const clients = [
    "We’re growing!",
    "Client information will be updated soon as we finalize new relationships and projects.",
  ] as const;

  return (
    <main className="section" id="clients">
      <div className="container">
        <h1>Clients</h1>
        {/* Removed the 'Representative experience' line */}
        <ul
          className="text-muted"
          style={{ marginTop: 12, lineHeight: 1.8, paddingLeft: "1.25rem", listStyle: "disc" }}
        >
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
