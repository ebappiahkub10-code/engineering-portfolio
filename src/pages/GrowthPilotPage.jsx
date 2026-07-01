const evolution = [
  {
    phase: "01",
    title: "Python pricing engine",
    image: "/images/growthpilot/cli-pricing.png",
    text: "GrowthPilot began as a command-line pricing platform focused on costs, margins, profit forecasts, break-even analysis, and sensitivity analysis.",
  },
  {
    phase: "02",
    title: "AI and feature engineering",
    image: "/images/growthpilot/feature-engineering.png",
    text: "The project expanded into synthetic retail data, feature engineering, and machine learning foundations for pricing and profit prediction.",
  },
  {
    phase: "03",
    title: "Product interface",
    image: "/images/growthpilot/landing-page.png",
    text: "The platform evolved from a terminal tool into a web product with clearer positioning, onboarding, and a more accessible user experience.",
  },
  {
    phase: "04",
    title: "Business dashboard",
    image: "/images/growthpilot/dashboard.png",
    text: "The dashboard introduced portfolio metrics, product summaries, profit estimates, and quick actions for business analysis.",
  },
  {
    phase: "05",
    title: "AI decision workspace",
    image: "/images/growthpilot/workspace-hero.png",
    text: "The current direction is a workspace where users can describe business questions and receive structured guidance, context, and next steps.",
  },
];

function GrowthPilotPage() {
  return (
    <>
      <section className="section case-hero">
        <div className="section-header">
          <p className="eyebrow">GrowthPilot Case Study</p>
          <h1>Engineering a business decision-support platform.</h1>
          <p>
            GrowthPilot began as a Python pricing tool and has evolved into a
            full-stack platform for pricing, profitability, analytics, and
            AI-assisted decision workflows.
          </p>
        </div>

        <div className="case-hero-image">
          <img
            src="/images/growthpilot/workspace-hero.png"
            alt="GrowthPilot AI decision workspace"
          />
        </div>
      </section>

      <section className="section case-section">
        <div className="section-header">
          <p className="eyebrow">The Challenge</p>
          <h2>Helping business owners reason through pricing decisions.</h2>
          <p>
            GrowthPilot was inspired by the challenge of helping entrepreneurs
            evaluate pricing, profitability, and growth decisions with more
            clarity. The goal is not to replace judgment, but to give users a
            structured workspace for understanding the numbers behind their
            decisions.
          </p>
        </div>
      </section>

      <section className="section case-section">
        <div className="section-header">
          <p className="eyebrow">Product Evolution</p>
          <h2>From pricing calculator to decision workspace.</h2>
          <p>
            Each version of GrowthPilot added a new layer: business logic,
            analytics, machine learning foundations, product design, and
            AI-assisted workflows.
          </p>
        </div>

        <div className="evolution-timeline">
          {evolution.map((item) => (
            <article className="evolution-timeline-card" key={item.title}>
              <div className="evolution-meta">
                <span>{item.phase}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <img src={item.image} alt={item.title} />
            </article>
          ))}
        </div>
      </section>

      <section className="section case-section">
        <div className="section-header">
          <p className="eyebrow">Engineering Decisions</p>
          <h2>Built through intentional tradeoffs.</h2>
          <p>
            GrowthPilot taught me that engineering is not only about adding
            features. It is about choosing the right level of complexity for the
            current stage of the product.
          </p>
        </div>

        <div className="decision-grid">
          <article>
            <h3>React</h3>
            <p>
              Used to build a component-based interface that can evolve as new
              workspace features and AI workflows are added.
            </p>
          </article>

          <article>
            <h3>FastAPI</h3>
            <p>
              Chosen to separate frontend and backend responsibilities while
              keeping the API layer clean and extensible.
            </p>
          </article>

          <article>
            <h3>SQLite</h3>
            <p>
              Used during early development to keep persistence simple,
              structured, and reliable while the product direction evolved.
            </p>
          </article>

          <article>
            <h3>AI Roadmap</h3>
            <p>
              AI features are being added carefully, with priority on
              trustworthy recommendations, structured reasoning, and useful
              context rather than flashy automation.
            </p>
          </article>
        </div>
      </section>

      <section className="section case-section">
        <div className="section-header">
          <p className="eyebrow">Engineering Realization</p>
          <h2>Not every AI feature should be built immediately.</h2>
          <p>
            I considered adding live market research that would automatically
            scrape competitor pricing data. I decided not to build it
            immediately because reliability, data accuracy, and maintainability
            mattered more than adding a feature that could weaken user trust.
          </p>
          <p>
            The lesson: a strong AI system is not defined by the number of
            features it has. It is defined by the reliability and trustworthiness
            of the recommendations it produces.
          </p>
        </div>
      </section>
    </>
  );
}

export default GrowthPilotPage;