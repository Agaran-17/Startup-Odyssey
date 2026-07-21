import IntroStats from "./IntroStats";

export default function IntroLeftPanel() {
  return (
    <>
      {/* Mission Briefing */}

      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-purple-400">
        // Mission Briefing
      </p>

      {/* Heading */}

      <h1 className="text-[84px] font-extrabold leading-none text-white">
        ₹1 Lakh
      </h1>

      <h1 className="mt-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-[84px] font-extrabold leading-none text-transparent">
        to ₹10 Lakh
      </h1>

      <h1 className="mt-2 text-[84px] font-extrabold leading-none text-white">
        in 30 Days.
      </h1>

      {/* Description */}

      <p className="mt-12 max-w-lg text-[22px] leading-10 text-gray-400">
        You're a first-time founder with ₹1,00,000 and a vision.
        Over 30 critical startup dilemmas you'll face funding,
        hiring, product and market decisions.
        Every decision compounds.
      </p>

      {/* Stats */}

      <IntroStats />
    </>
  );
}