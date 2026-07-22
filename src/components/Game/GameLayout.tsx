import LeftSidebar from "./LeftSidebar";
import CenterPanel from "./CenterPanel";
import RightSidebar from "./RightSidebar";

export default function GameLayout() {
  return (
    <section className="mx-auto flex max-w-[1850px] gap-12 px-10 pt-8">

      {/* Left */}
      <div className="w-[340px] shrink-0">
        <LeftSidebar />
      </div>

      {/* Center */}
      <div className="min-w-0 flex-1">
        <CenterPanel />
      </div>

      {/* Right */}
      <div className="w-[430px] shrink-0">
        <RightSidebar />
      </div>

    </section>
  );
}