import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FadeInOnScroll } from "./components/FadeInOnScroll";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <FadeInOnScroll>
          <CaseStudies />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <About />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Stack />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Testimonial />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Contact />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}
