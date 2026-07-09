import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EngineeringJourney } from "@/components/sections/EngineeringJourney";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { EngineeringCaseStudies } from "@/components/sections/EngineeringCaseStudies";
import { CoreExpertise } from "@/components/sections/CoreExpertise";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <EngineeringJourney />
        <ProfessionalExperience />
        <EngineeringCaseStudies />
        <CoreExpertise />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
