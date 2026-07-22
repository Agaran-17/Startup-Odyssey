import AdvisorHeader from "./AdvisorHeader";
import AdvisorChat from "./AdvisorChat";
import RevenueGoal from "./RevenueGoal";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-10">

      <AdvisorHeader />

      <AdvisorChat />

      <RevenueGoal />

    </div>
  );
}