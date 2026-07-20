import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="max-w-6xl text-center">
        <HeroBadge />

        <HeroHeading />
      </div>
    </section>
  );
}