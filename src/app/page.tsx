import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
