export default function ServicesPage() {
  return (
    <main className="section" id="services">
      <div className="container">
        <h1>Services</h1>

        {/* Subheading */}
        <p
          className="text-muted"
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            marginTop: '0.75rem',
            maxWidth: '800px',
          }}
        >
          At <strong>Cloud Tek Computing</strong>, we help agencies and enterprises modernize
          their technology, unlock the power of data, and keep IT operations
          running at peak performance.
        </p>

        {/* Bulleted list */}
        <ul
          className="text-muted"
          style={{
            marginTop: '1.5rem',
            lineHeight: 1.8,
            fontSize: '16px',
          }}
        >
          <li>
            <strong>Digital Transformation:</strong> Modernize legacy systems
            with cloud-ready, secure, and scalable solutions.
          </li>

          <li>
            <strong>Data &amp; AI Solutions:</strong> Deliver actionable
            intelligence through advanced analytics, AI, and data-driven
            automation to enhance decision-making and operational efficiency.
          </li>

          <li>
            <strong>Cloud &amp; Infrastructure:</strong> Design and manage
            robust, secure, and cost-efficient IT environments that meet federal
            performance and compliance standards.
          </li>

          <li>
            <strong>Cybersecurity &amp; Compliance:</strong> Safeguard systems
            and data with federal-grade security frameworks and maintain
            continuous compliance with evolving mandates.
          </li>

          <li>
            <strong>Managed IT Services:</strong> Provide reliable,
            mission-aligned IT support, monitoring, and optimization to ensure
            secure and uninterrupted operations.
          </li>
        </ul>
      </div>
    </main>
  );
}
