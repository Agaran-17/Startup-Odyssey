export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-24 px-6">

      <div className="border border-purple-500/30 rounded-full px-6 py-2 text-sm text-purple-300 mb-8">
        ✦ AI POWERED SIMULATION • SEASON 01
      </div>

      <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white">
        Build Your Startup.
      </h1>

      <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Shape Your Destiny.
      </h1>

      <p className="mt-8 text-gray-400 max-w-3xl text-xl leading-9">
        Navigate 30 critical founder decisions.
        Grow from ₹1 Lakh to ₹10 Lakh.
        Your AI advisor watches every move and
        guides your journey in real time.
      </p>

      <div className="mt-12">
  <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-xl text-white font-semibold shadow-lg">
    Begin Your Odyssey →
  </button>
</div>

    </section>
  );
}