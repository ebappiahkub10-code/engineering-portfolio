function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <p className="eyebrow">Projects</p>
        <h2>Selected engineering work.</h2>
        <p>
          A focused collection of projects in AI decision support, financial
          technology, and software engineering.
        </p>
      </div>

      <div className="project-grid">
        <article className="project-card featured-project">
          <span className="project-tag">Flagship</span>
          <h3>GrowthPilot</h3>
          <p>AI business decision-support platform for pricing, profitability, and growth strategy.</p>
        </article>

        <article className="project-card">
          <span className="project-tag">Next Build</span>
          <h3>AI Fraud Detection System</h3>
          <p>Machine learning system for detecting suspicious financial transactions.</p>
        </article>

        <article className="project-card">
          <span className="project-tag">C++</span>
          <h3>Mobile Banking Application</h3>
          <p>Console-based banking system with account logic, transactions, and secure login concepts.</p>
        </article>
      </div>
    </section>
  );
}

export default ProjectsSection;