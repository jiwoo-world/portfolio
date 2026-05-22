import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import EducationSection from "@/components/sections/Education";

import { profile } from "@/data/profile";
import { stacks } from "@/data/stacks";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { educationData } from "@/data/education";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero profile={profile} />
        <About profile={profile} />
        <Stack stacks={stacks} />
        <Projects projects={projects} />
        <ExperienceSection experiences={experiences} />
        <EducationSection educationData={educationData} />
      </main>
      <Footer />
    </>
  );
}
