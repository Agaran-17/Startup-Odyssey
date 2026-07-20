import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="max-w-6xl text-center">

        <HeroBadge />

        <HeroHeading />

        <HeroDescription />

        <HeroButton />

      </div>
    </section>
  );
}