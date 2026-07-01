function ThinkingLogPage() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Thinking Log</p>
        <h1>Engineering notes and realizations.</h1>
        <p>
          Short reflections on product direction, technical tradeoffs, AI
          reliability, secure software, and lessons learned while building.
        </p>
      </div>

      <article className="case-preview-card">
        <span>01</span>
        <h3>Not every AI feature should be built immediately.</h3>
        <p>
          While developing GrowthPilot, I considered live competitor price
          scraping. I decided not to build it immediately because reliability,
          data accuracy, and maintainability mattered more than adding a flashy
          AI feature too early.
        </p>
      </article>
    </section>
  );
}

export default ThinkingLogPage;