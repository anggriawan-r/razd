import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDiv from "@/components/SectionDiv";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-32 sm:gap-0">
      <Intro />
      <SectionDiv />
      <About />
      <SectionDiv />
      <Projects />
      <SectionDiv />
      <Skills />
      <Contact />
    </main>
  );
}
