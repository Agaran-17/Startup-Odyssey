import GridBackground from "@/components/common/GridBackground";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <GridBackground />

      <Navbar />

      <Hero />

    </main>
  );
}