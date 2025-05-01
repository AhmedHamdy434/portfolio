import Contact from "@/components/Contact";
import Hero from "@/components/Hero-pic";
import IconSlider from "@/components/IconSlider";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <IconSlider />
      <Projects />
      <Contact />
    </main>
  );
}
