type Props = {
  icon: string;
  title: string;
  subtitle: string;
  selected?: boolean;
};

export default function ArchetypeCard({
  icon,
  title,
  subtitle,
  selected = false,
}: Props) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-all cursor-pointer
      ${
        selected
          ? "border-purple-500 bg-[#1A1328]"
          : "border-white/10 bg-[#11111B] hover:border-purple-400"
      }`}
    >
      <div className="text-2xl">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}