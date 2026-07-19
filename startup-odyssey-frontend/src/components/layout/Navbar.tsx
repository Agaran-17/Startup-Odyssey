export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500"></div>

        <h1 className="text-white text-xl font-bold">
          Startup Odyssey
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300">
        <li className="hover:text-white cursor-pointer">
          Leaderboard
        </li>

        <li className="hover:text-white cursor-pointer">
          How It Works
        </li>

        <li className="hover:text-white cursor-pointer">
          About
        </li>
      </ul>

    
    </nav>
  );
}