type DecisionButtonProps = {
  title: string;
  primary?: boolean;
  onClick?: () => void;
};

export default function DecisionButton({
  title,
  primary = false,
  onClick,
}: DecisionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-xl border px-6 py-5 transition-all duration-300 ${
        primary
          ? "border-transparent bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/20 hover:scale-[1.01]"
          : "border-white/10 bg-white/[0.03] text-white hover:border-purple-500/40 hover:bg-white/[0.05]"
      }`}
    >
      <span className="text-lg font-semibold">{title}</span>

      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}