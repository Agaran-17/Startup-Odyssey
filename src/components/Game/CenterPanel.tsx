import MetricCard from "./MetricCard";
import ScenarioCard from "./ScenarioCard";

export default function CenterPanel() {
  return (
    <div className="flex w-full flex-col">
<p className="mb-8 text-xs tracking-[0.45em] text-white/40">
  LIVE METRICS
</p>

{/* Metrics Grid */}
<div className="grid grid-cols-3 gap-6">

  <MetricCard
    icon="💰"
    title="CASH BALANCE"
    value="₹1.0L"
    change="+8.2%"
  />

  <MetricCard
    icon="⭐"
    title="REPUTATION"
    value="45"
    change="+12 pts"
  />

  <MetricCard
    icon="👥"
    title="CUSTOMERS"
    value="12"
    change="+42 new"
  />

  <MetricCard
    icon="🏢"
    title="EMPLOYEES"
    value="3"
    change="Active"
  />

  <MetricCard
    icon="📦"
    title="PRODUCT"
    value="60%"
    change="+5 pts"
  />

</div>

     
      <div className="mt-10">
        <ScenarioCard />
      </div>

    </div>
  );
}