import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import GrowthPilotShowcase from "./components/growthpilot/GrowthPilotShowcase";
import ProjectsSection from "./components/projects/ProjectsSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";

import "./App.css";

function App() {
  return (
    <main className="portfolio-shell">
      <Navbar />
      <Hero />
      <GrowthPilotShowcase />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

export default App;