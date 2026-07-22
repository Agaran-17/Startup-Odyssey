type MetricCardProps = {
  icon: string;
  title: string;
  value: string;
  change: string;
};

export default function MetricCard({
  icon,
  title,
  value,
  change,
}: MetricCardProps) {
  return (
    <div className="flex h-[220px] w-[170px] shrink-0 flex-col rounded-[28px] border border-white/10 bg-[#171321] p-7">

      {/* Icon */}
      <div className="mb-5 text-3xl">
        {icon}
      </div>

      {/* Title */}
      <p className="text-[11px] uppercase tracking-[0.28em] leading-5 text-white/45">
        {title}
      </p>

      {/* Value */}
      <h2 className="mt-6 text-[48px] font-bold leading-none text-white">
        {value}
      </h2>

      {/* Change */}
      <p className="mt-auto text-[18px] font-semibold text-[#18F2B2]">
        {change}
      </p>

    </div>
  );
}