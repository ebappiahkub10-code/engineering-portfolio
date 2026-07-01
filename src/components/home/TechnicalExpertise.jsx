const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C++", "Java", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "HTML", "CSS", "Responsive UI"],
  },
  {
    title: "Backend & Data",
    skills: ["FastAPI", "SQLite", "REST APIs", "Data Modeling"],
  },
  {
    title: "AI & Analytics",
    skills: ["Machine Learning", "Feature Engineering", "Predictive Modeling"],
  },
  {
    title: "Security & Tools",
    skills: ["Cybersecurity Fundamentals", "Git", "GitHub", "VS Code"],
  },
];

function TechnicalExpertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="section-header">
        <p className="eyebrow">Technical Expertise</p>
        <h2>Tools I use to build intelligent and reliable systems.</h2>
        <p>
          My technical foundation spans full-stack development, data-driven
          applications, AI foundations, and secure engineering principles.
        </p>
      </div>

      <div className="expertise-grid">
        {skillGroups.map((group) => (
          <article className="expertise-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechnicalExpertise;