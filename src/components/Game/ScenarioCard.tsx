import DecisionButton from "./DecisionButton";

export default function ScenarioCard() {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-[#14121F]/90 p-8">

      {/* Top */}

      <div className="mb-8 flex items-start justify-between">

        <div>
          <span className="rounded-md bg-blue-500/20 px-3 py-1 text-xs tracking-[0.25em] text-blue-300">
            FUNDING
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Angel Investor Pitch
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            A seasoned angel investor offers ₹5,00,000 in seed funding in
            exchange for 20% equity. They bring strong network access but
            want a board seat and monthly reporting.
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs tracking-[0.35em] text-gray-500">
            SCENARIO
          </p>

          <h2 className="text-6xl font-bold text-purple-500">
            01
          </h2>
        </div>

      </div>

      {/* Buttons */}

      <div className="space-y-4">

        <DecisionButton
          title="Accept the Offer"
          primary
        />

        <DecisionButton
          title="Negotiate Better Terms"
        />

        <DecisionButton
          title="Reject & Stay Lean"
        />

      </div>

    </div>
  );
}