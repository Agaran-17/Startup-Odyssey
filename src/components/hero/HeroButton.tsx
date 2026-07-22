import Link from "next/link";

export default function HeroButton() {
  return (
    <div className="flex justify-center">
      <Link href="/intro">
        <button
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            via-blue-500
            to-cyan-400
            px-10
            py-5
            text-lg
            font-semibold
            text-white
            shadow-[0_0_35px_rgba(139,92,246,0.45)]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]
          "
        >
          <span className="relative z-10">
           Begin Your Startup →
          </span>

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-white/20
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />
        </button>
      </Link>
    </div>
  );
}