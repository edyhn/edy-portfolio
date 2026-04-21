import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import WorkGrid from "@/components/sections/WorkGrid";
import DesignSection from "@/components/sections/DesignSection";
import ContactSection from "@/components/sections/ContactSection";
import { getAllExperiences } from "@/sanity/queries";
import type { SanityExperience } from "@/lib/types";

const FALLBACK_EXPERIENCES: SanityExperience[] = [
  {
    _id: "freelance",
    company: "Freelance",
    role: "IT Developer & Visual Designer",
    period: "2023 – Present",
    description:
      "Building web apps and digital products by collaborating with AI agents — turning ideas and design intuition into real, working experiences.",
    order: 1,
  },
  {
    _id: "bangkit",
    company: "Bangkit Academy",
    role: "Cloud Computing Cohort",
    period: "2023",
    description:
      "Intensive Google Bangkit program focused on Cloud Computing using GCP, API development, and automated deployment.",
    order: 2,
  },
];

export default async function Home() {
  let experiences: SanityExperience[] = [];

  try {
    experiences = await getAllExperiences();
  } catch {
    // Sanity fetch error — pakai fallback
  }

  if (!experiences || experiences.length === 0) {
    experiences = FALLBACK_EXPERIENCES;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <DesignSection />
        <AboutSection experiences={experiences} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
