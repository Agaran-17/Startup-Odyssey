export default function RevenueGoal() {
  const progress = 10; // 10%

  return (
    <div className="rounded-3xl border border-white/10 bg-[#181523] p-6">

      {/* Title */}

      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        Revenue Goal
      </h3>

      {/* Subtitle */}

      <div className="mt-6 flex items-center justify-between">

        <p className="text-sm text-gray-400">
          Progress to ₹10L
        </p>

        <p className="text-sm font-semibold text-emerald-400">
          {progress}%
        </p>

      </div>

      {/* Progress Bar */}

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
          style={{ width: `${progress}%` }}
        />

      </div>

      {/* Bottom Labels */}

      <div className="mt-4 flex items-center justify-between text-sm">

        <span className="font-semibold text-gray-300">
          ₹1.0L
        </span>

        <span className="text-gray-500">
          ₹10L Target
        </span>

      </div>

    </div>
  );
}