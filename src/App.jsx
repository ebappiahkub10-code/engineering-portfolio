import Navbar from "./components/layout/Navbar";
import GrowthPilotShowcase from "./components/growthpilot/GrowthPilotShowcase";
import ProjectsSection from "./components/projects/ProjectsSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";

import "./App.css";

function App() {
  return (
    <main className="portfolio-shell">
      <Navbar />

      <section className="hero-section" id="home">
        <p className="eyebrow">AI • FinTech • Software Engineering</p>

        <h1>
          Building intelligent software that helps people make better decisions.
        </h1>

        <p className="hero-copy">
          I’m Enoch Appiah-Kubi, a software engineer focused on AI decision
          support systems, financial technology, and full-stack product
          development.
        </p>

        <div className="hero-actions">
          <a href="#growthpilot" className="primary-button">
            View GrowthPilot
          </a>
          <a href="#projects" className="secondary-button">
            Explore Projects
          </a>
        </div>
      </section>

      <GrowthPilotShowcase />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

export default App;