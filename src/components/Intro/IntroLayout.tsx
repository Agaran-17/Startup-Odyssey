import IntroLeftPanel from "./IntroLeftPanel";
import IntroRightPanel from "./IntroRightPanel";

export default function IntroLayout() {
  return (
    <section className="grid min-h-[calc(100vh-100px)] grid-cols-2">

      {/* ================= LEFT PANEL ================= */}

      <div className="flex items-start border-r border-white/10">

        <div className="ml-12 mt-44 max-w-xl">
          <IntroLeftPanel />
        </div>

      </div>

      {/* ================= RIGHT PANEL ================= */}

      <div className="px-20">

        <IntroRightPanel />

      </div>

    </section>
  );
}