export default function FounderNameInput() {
  return (
    <div className="mt-12">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-purple-400">
        Founder Name
      </p>

      <input
        type="text"
        defaultValue="Leo"
        placeholder="Enter your name"
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#12111C]
          px-5
          text-lg
          text-white
          outline-none
          transition
          focus:border-purple-500
        "
      />

    </div>
  );
}