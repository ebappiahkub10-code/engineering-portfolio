function GrowthPilotShowcase() {
  return (
    <section className="section growthpilot-section" id="growthpilot">
      <div className="section-header">
        <p className="eyebrow">Featured Case Study</p>
        <h2>GrowthPilot</h2>
        <p>
          An AI business decision-support platform designed to help small
          businesses reason through pricing, profitability, risk, and growth
          decisions.
        </p>
      </div>

      <div className="growthpilot-card">
        <div>
          <span className="project-tag">Flagship Project</span>
          <h3>AI Business Decision Support Platform</h3>
          <p>
            GrowthPilot is being built as more than a dashboard. It acts like an
            AI co-pilot for business owners by combining financial analysis,
            structured reasoning, business memory, and scenario planning.
          </p>

          <div className="tech-list">
            <span>React</span>
            <span>FastAPI</span>
            <span>Python</span>
            <span>SQLite</span>
            <span>AI Reasoning</span>
          </div>
        </div>

        <div className="mock-dashboard">
          <div className="mock-topbar" />
          <div className="mock-grid">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthPilotShowcase;