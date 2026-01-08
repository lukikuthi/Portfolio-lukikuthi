import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ImpactSection />
        <ProcessSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
