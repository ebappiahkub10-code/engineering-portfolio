function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="eyebrow">AI • FinTech • Software Engineering</p>

        <h1>
          Building intelligent software for smarter business and financial
          decisions.
        </h1>

        <p className="hero-copy">
          I’m Enoch Appiah-Kubi, a software engineer building AI decision
          support systems, fintech tools, and full-stack products that turn
          complex information into clear action.
        </p>

        <div className="hero-actions">
          <a href="#growthpilot" className="primary-button">
            Explore GrowthPilot
          </a>
          <a href="#projects" className="secondary-button">
            View Projects
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-hidden="true">
        <div className="panel-header">
          <span />
          <span />
          <span />
        </div>

        <div className="signal-card">
          <p>GrowthPilot Signal</p>
          <strong>Profit risk improving</strong>
          <span>AI reasoning detected stronger margin stability.</span>
        </div>

        <div className="metric-row">
          <div>
            <span>Focus</span>
            <strong>AI Systems</strong>
          </div>
          <div>
            <span>Domain</span>
            <strong>FinTech</strong>
          </div>
        </div>

        <div className="decision-flow">
          <span>Data</span>
          <span>Reasoning</span>
          <span>Action</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;