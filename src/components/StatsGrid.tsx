type GameState = {
  cash: number;
  reputation: number;
  customers: number;
  employees: number;
  productQuality: number;
};

type StatsGridProps = {
  gameState: GameState;
};

export default function StatsGrid({
  gameState,
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-gray-900 p-4 rounded">
        💰 Cash: ₹{gameState.cash}
      </div>

      <div className="bg-gray-900 p-4 rounded">
        ⭐ Reputation: {gameState.reputation}
      </div>

      <div className="bg-gray-900 p-4 rounded">
        👥 Customers: {gameState.customers}
      </div>

      <div className="bg-gray-900 p-4 rounded">
        👨‍💻 Employees: {gameState.employees}
      </div>

      <div className="bg-gray-900 p-4 rounded">
        📦 Product Quality: {gameState.productQuality}
      </div>
    </div>
  );
}