type AdvisorCardProps = {
  message: string;
};

export default function AdvisorCard({
  message,
}: AdvisorCardProps) {
  return (
    <div className="bg-purple-900 border border-purple-500 p-4 rounded mb-6">
      <h3 className="font-bold mb-2">
        🤖 Startup Advisor
      </h3>

      <p>{message}</p>
    </div>
  );
}