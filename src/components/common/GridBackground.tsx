export default function GridBackground() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-[#070812]" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-10 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Purple Glow */}
      <div className="fixed left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[180px]" />

      {/* Blue Glow */}
      <div className="fixed right-20 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />
    </>
  );
}