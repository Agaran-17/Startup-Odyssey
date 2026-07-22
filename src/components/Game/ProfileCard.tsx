export default function ProfileCard() {
  return (
   <div className="w-full rounded-3xl border border-white/10 bg-[#11101A]/80 p-2">

      {/* Avatar */}

      <div className="flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-4xl font-bold text-white shadow-[0_0_40px_rgba(124,58,237,0.35)]">
          L
        </div>
      </div>

      {/* Name */}

      <h2 className="mt-6 text-center text-3xl font-bold text-white">
        Leo
      </h2>

      <p className="mt-2 text-center text-gray-400">
        Growth Founder
      </p>

      {/* Stage */}

      <div className="mt-6 flex justify-center">
        <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-sm tracking-wider text-purple-300">
          ● PRE-SEED
        </span>
      </div>

      {/* Stats */}

      <div className="mt-10 space-y-6">

        <div>
          <div className="mb-2 flex justify-between text-sm text-gray-300">
            <span>Reputation</span>
            <span>45</span>
          </div>

          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[45%] rounded-full bg-purple-500"></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm text-gray-300">
            <span>Founder Score</span>
            <span>50</span>
          </div>

          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[50%] rounded-full bg-cyan-400"></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm text-gray-300">
            <span>Product Quality</span>
            <span>60</span>
          </div>

          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[60%] rounded-full bg-emerald-400"></div>
          </div>
        </div>

      </div>

    </div>
  );
}