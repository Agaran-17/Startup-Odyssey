export default function AdvisorHeader() {
  return (
    <div className="rounded-t-3xl border border-white/10 bg-[#181523] px-10 pt-10 py-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 text-xl shadow-lg shadow-purple-500/30">
            🤖
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Startup Advisor
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-emerald-400">
              ● AI ACTIVE
            </p>
          </div>

        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          GPT-4o
        </div>

      </div>

    </div>
  );
}