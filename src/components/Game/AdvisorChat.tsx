export default function AdvisorChat() {
  return (
    <div className="rounded-b-3xl border-x border-b border-white/10 bg-[#181523] p-5">

      {/* Session */}

      <div className="mb-5 rounded-xl border border-white/10 bg-[#201B2D] px-4 py-3">
        <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
          SESSION • Founder • DAY 1
        </p>
      </div>

      {/* AI Message */}

      <div className="flex gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400">
          🤖
        </div>

        <div className="rounded-2xl bg-[#2A2438] p-5">

          <p className="leading-8 text-gray-300">
            Your burn rate is within safe parameters at 15% monthly.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            Reinvesting in product quality is your strongest acquisition
            lever — your NPS indicates untapped referral potential.
          </p>

          <p className="mt-5 text-xs text-gray-500">
            Just now • Startup Advisor AI
          </p>

        </div>

      </div>

      {/* Input */}

      <div className="mt-6 flex gap-3">

        <input
          placeholder="Ask your advisor..."
          className="flex-1 rounded-xl border border-white/10 bg-[#201B2D] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-purple-500"
        />

        <button className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-5 text-xl text-white hover:opacity-90">
          →
        </button>

      </div>

    </div>
  );
}