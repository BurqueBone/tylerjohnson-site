import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <CaseStudies />
      </main>
    </>
  );
}
