import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <CaseStudies />
        <About />
        <Stack />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
