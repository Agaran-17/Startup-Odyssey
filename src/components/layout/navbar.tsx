import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/30" />

          <h1 className="text-white text-2xl font-bold tracking-tight">
            Startup Odyssey
          </h1>

        </div>

        {/* Guest Button */}

        <Link href="/intro">

          <button className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-5 py-2.5 text-white transition hover:bg-purple-600/30">
            Play as Guest →
          </button>

        </Link>

      </nav>
    </header>
  );
}