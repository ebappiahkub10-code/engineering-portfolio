import Hero from "../components/hero/Hero";
import GrowthPilotShowcase from "../components/growthpilot/GrowthPilotShowcase";
import ProjectsSection from "../components/projects/ProjectsSection";
import AboutSection from "../components/about/AboutSection";
import ContactSection from "../components/contact/ContactSection";

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <GrowthPilotShowcase />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default HomePage;