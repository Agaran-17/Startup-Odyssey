import HeroBadge from "./HeroBadge";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <HeroBadge />
      </div>
    </section>
  );
}