import GridBackground from "@/components/common/GridBackground";
import Navbar from "@/components/layout/navbar";
import IntroLayout from "@/components/Intro/IntroLayout";

export default function IntroPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <GridBackground />

      <Navbar />

      <IntroLayout />

    </main>
  );
}