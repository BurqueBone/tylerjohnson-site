import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto max-w-5xl px-6 py-24">
        <p>nav renders above</p>
      </main>
    </>
  );
}
