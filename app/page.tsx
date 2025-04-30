import Contact from "@/components/Contact";
import Hero from "@/components/Hero-pic";
import IconSlider from "@/components/IconSlider";
import Projects from "@/components/Projects";
// import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
// import { testimonials } from "@/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="py-25 bg2">
        <div className="container">
          <h1 className="text-xl md:text-4xl font-bold mb-8" id="skills">
            My Skills
          </h1>
          <IconSlider />
        </div>
      </div>
      {/* <AnimatedTestimonials autoplay={true} testimonials={testimonials} /> */}
      <Projects />

      <Contact />
    </main>
  );
}
