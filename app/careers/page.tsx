export default function CareersPage() {
  return (
    <main className="section" id="careers">
      <div className="container">
        <h1>Careers</h1>
        <p className="text-muted" style={{marginTop:8}}>
          We’re building a practitioner-led team. If you’re experienced in AWS, EKS, Kafka, Java,
          or federal security/compliance, we’d love to talk.
        </p>
        <div style={{marginTop:12}}>
          <a className="btn btn-primary" href="mailto:hello@cloudtekcomputing.com?subject=Career%20Inquiry">
            Email your resume
          </a>
        </div>
      </div>
    </main>
  );
}
