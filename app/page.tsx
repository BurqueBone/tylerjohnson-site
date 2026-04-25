import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Stack } from "./components/Stack";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <CaseStudies />
        <About />
        <Stack />
      </main>
    </>
  );
}
