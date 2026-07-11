import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">
        Startup Odyssey
      </h1>

      <p className="text-gray-400 mb-8">
        Every Decision Shapes Your Startup
      </p>

      <Link href="/intro">
  <button className="bg-blue-600 px-6 py-3 rounded">
    Start Building
  </button>
</Link>
    </main>
  );
}