import Link from "next/link";

export default function IntroPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8">

      <h1 className="text-5xl font-bold mb-8">
        🚀 Startup Odyssey
      </h1>

      <div className="max-w-2xl text-center space-y-4">

        <p>
          You are an aspiring founder with a dream.
        </p>

        <p>
          You start with ₹100,000 and just 30 days to build a successful startup.
        </p>

        <p>
          Every decision affects your:
        </p>

        <ul className="space-y-2">
          <li>💰 Cash</li>
          <li>⭐ Reputation</li>
          <li>👥 Customers</li>
          <li>📦 Product Quality</li>
        </ul>

        <p className="mt-6">
          Reach ₹1,000,000 and build your legacy.
        </p>

      </div>

      <Link href="/game">
        <button className="mt-10 bg-green-600 px-8 py-3 rounded-lg hover:bg-green-700 transition">
          Begin Day 1 →
        </button>
      </Link>

    </main>
  );
}