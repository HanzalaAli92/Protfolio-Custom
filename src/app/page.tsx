import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    {/* Hello */}
  <Hero />
  <About />
  <Skills />
  <Project />
  <Contact />
   </div>
  );
}
