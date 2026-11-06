import dynamic from 'next/dynamic';
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

// Lazy load below-fold components
const Services = dynamic(() => import("@/components/services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="w-full py-24" />
});
const Skills = dynamic(() => import("@/components/skills").then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="w-full py-24" />
});
const Experience = dynamic(() => import("@/components/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="w-full py-24" />
});
const Projects = dynamic(() => import("@/components/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="w-full py-24" />
});
const Process = dynamic(() => import("@/components/process").then(mod => ({ default: mod.Process })), {
  loading: () => <div className="w-full py-24" />
});

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="w-full py-24" />
});
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="w-full py-24" />
});
const Education = dynamic(() => import("@/components/education").then(mod => ({ default: mod.Education })), {
  loading: () => <div className="w-full py-24" />
});

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Process />
      <Experience />
      <Education />
      <Projects />

      <Testimonials />
      <Contact />
    </div>
  );
}
