export default function ServicesPage() {
  return (
    <main className="section" id="services">
      <div className="container">
        <h1>Services</h1>
        <ul className="text-muted" style={{marginTop:12, lineHeight:1.8}}>
          <li><strong>Cloud & Containers:</strong> AWS architecture, EKS clusters, landing zones, IAM guardrails, IaC, GitOps.</li>
          <li><strong>Legacy Modernization:</strong> ALC → Java microservices, API enablement, strangler patterns, batch → event-driven.</li>
          <li><strong>Data & Integration:</strong> Kafka/MSK streams, real-time ETL, MongoDB/DynamoDB design, Oracle/DB2 migrations.</li>
          <li><strong>Platform Engineering:</strong> CI/CD, observability, cost governance, SRE, secure SDLC.</li>
        </ul>
      </div>
    </main>
  );
}