import Hero from "../components/hero/Hero";
import GrowthPilotShowcase from "../components/growthpilot/GrowthPilotShowcase";
import ProjectsSection from "../components/projects/ProjectsSection";
import AboutSection from "../components/about/AboutSection";
import TechnicalExpertise from "../components/home/TechnicalExpertise";
import ContactSection from "../components/contact/ContactSection";

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <GrowthPilotShowcase />
      <AboutSection />
      <ContactSection />
      <TechnicalExpertise />
    </>
  );
}

export default HomePage;