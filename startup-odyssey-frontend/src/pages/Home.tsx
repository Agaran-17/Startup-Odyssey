import Navbar from "../components/layout/Navbar";
import Hero from "../components/ui/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090f]">
      <Navbar />
      <Hero />
    </div>
  );
}