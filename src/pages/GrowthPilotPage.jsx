function GrowthPilotPage() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">GrowthPilot Case Study</p>
        <h1>Engineering a business decision-support platform.</h1>
        <p>
          GrowthPilot began as a Python pricing tool and has evolved into a
          full-stack platform for pricing, profitability, analytics, and
          AI-assisted decision workflows.
        </p>
      </div>

      <img
        src="/images/growthpilot/workspace-hero.png"
        alt="GrowthPilot workspace"
        style={{
          width: "100%",
          borderRadius: "32px",
          border: "1px solid var(--border)",
        }}
      />
    </section>
  );
}

export default GrowthPilotPage;