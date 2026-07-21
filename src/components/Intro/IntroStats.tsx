const stats = [
  {
    icon: "💰",
    label: "Starting Capital",
    value: "₹1,00,000",
  },
  {
    icon: "🎯",
    label: "Revenue Target",
    value: "₹10,00,000",
  },
  {
    icon: "📅",
    label: "Time Horizon",
    value: "30 Days",
  },
  {
    icon: "🤖",
    label: "AI Advisor",
    value: "Enabled",
  },
  {
    icon: "⚡",
    label: "Decisions",
    value: "15–30 Scenarios",
  },
];

export default function IntroStats() {
  return (
    <div className="mt-16 border-t border-white/10 pt-8">

      {stats.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between border-b border-white/5 py-5"
        >
          <div className="flex items-center gap-4">

            <span>{item.icon}</span>

            <span className="text-gray-400">
              {item.label}
            </span>

          </div>

          <span className="font-semibold text-white">
            {item.value}
          </span>

        </div>
      ))}

    </div>
  );
}