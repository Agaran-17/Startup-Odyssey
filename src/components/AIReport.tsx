type AIReportProps = {
  report: string;
};

export default function AIReport({
  report,
}: AIReportProps) {
  if (!report) return null;

  return (
    <div className="bg-gray-900 p-6 rounded mt-6">
      <h2 className="text-xl font-bold mb-4">
        🤖 AI Founder Report
      </h2>

      <p className="whitespace-pre-wrap">
        {report}
      </p>
    </div>
  );
}