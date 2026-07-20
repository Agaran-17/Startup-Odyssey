export default function HeroBadge() {
  return (
    <div className="mb-8 flex justify-center">
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-purple-500/30
          bg-purple-500/10
          px-6
          py-3
          backdrop-blur-md
        "
      >
        <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-purple-300
          "
        >
          AI Powered Simulation
        </span>
      </div>
    </div>
  );
}