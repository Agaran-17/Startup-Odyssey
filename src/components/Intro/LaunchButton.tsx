"use client";

import { useRouter } from "next/navigation";

export default function LaunchButton() {
  const router = useRouter();

  function handleLaunch() {
    router.push("/game");
  }

  return (
    <div className="mt-10">

      <button
        onClick={handleLaunch}
        className="
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-purple-600
          via-blue-500
          to-cyan-500
          py-5
          text-xl
          font-semibold
          text-white
          shadow-[0_0_35px_rgba(124,58,237,0.35)]
          transition-all
          duration-300
          hover:scale-[1.02]
        "
      >
        Launch Your Startup →
      </button>

      <p className="mt-6 text-center text-sm text-gray-500">
        By launching, you accept the full weight of founder responsibility.
      </p>

    </div>
  );
}