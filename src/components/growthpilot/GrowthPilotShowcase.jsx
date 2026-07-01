function GrowthPilotShowcase() {
  return (
    <section className="section growthpilot-case-preview" id="growthpilot">
      <div className="section-header">
        <p className="eyebrow">Case Study Preview</p>
        <h2>How GrowthPilot is being engineered.</h2>
        <p>
          GrowthPilot is more than a project showcase. It represents how I think
          through product direction, technical tradeoffs, and long-term system
          design.
        </p>
      </div>

      <div className="case-preview-grid">
        <article className="case-preview-card">
          <span>01</span>
          <h3>The Challenge</h3>
          <p>
            Help business owners reason through pricing, profitability, and
            growth decisions without requiring deep financial expertise.
          </p>
        </article>

        <article className="case-preview-card">
          <span>02</span>
          <h3>My Approach</h3>
          <p>
            Start with reliable business logic first, then evolve the platform
            into a full-stack decision workspace with analytics and AI-assisted
            workflows.
          </p>
        </article>

        <article className="case-preview-card highlight-card">
          <span>03</span>
          <h3>Engineering Judgment</h3>
          <p>
            I chose not to immediately build live competitor price scraping
            because reliability, data accuracy, and maintainability mattered
            more than adding a flashy AI feature too early.
          </p>
        </article>

        <article className="case-preview-card">
          <span>04</span>
          <h3>What’s Next</h3>
          <p>
            Continue strengthening the core analytics engine, improve persistent
            business context, and expand GrowthPilot into a deeper AI decision
            support system.
          </p>
        </article>
      </div>
    </section>
  );
}

export default GrowthPilotShowcase;