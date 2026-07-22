import GridBackground from "@/components/common/GridBackground";
import Navbar from "@/components/layout/navbar";
import GameLayout from "@/components/Game/GameLayout";

export default function GamePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <Navbar />
      <GameLayout />
    </main>
  );
}