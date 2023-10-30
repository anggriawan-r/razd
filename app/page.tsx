import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import SectionDiv from "@/components/SectionDiv";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-32 sm:gap-0">
      <Intro />
      <SectionDiv />
      <About />
      <SectionDiv />
      <Project />
      <SectionDiv />
      <Contact />
    </main>
  );
}
