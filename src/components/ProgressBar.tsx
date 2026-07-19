type ProgressBarProps = {
  day: number;
};

export default function ProgressBar({
  day,
}: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span>📅 Progress</span>
        <span>Day {day} / 30</span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="bg-linear-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${(day / 30) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}