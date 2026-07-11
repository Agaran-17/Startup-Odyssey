"use client";

import { useState } from "react";

import { scenarios } from "@/data/scenerios";
import { initialGameState } from "@/lib/initialstate";

export default function GamePage() {
  const [gameState, setGameState] = useState(initialGameState);
  
const [report, setReport] = useState("");
const [loading, setLoading] = useState(false);

  const currentScenario = scenarios.find(
    (scenario) => scenario.day === gameState.day
  );

  const getAdvisorMessage = () => {
  if (gameState.cash < 100000) {
    return "⚠️ Cash reserves are running low. Focus on revenue generation.";
  }

  if (gameState.customers > 150) {
    return "📈 Customer growth is strong. Consider scaling your operations.";
  }

  if (gameState.reputation > 100) {
    return "🌟 Your reputation is excellent. Protect your brand carefully.";
  }

  if (gameState.productQuality > 90) {
    return "🚀 Your product quality is outstanding. Monetization should be the next focus.";
  }

  return "🤖 Keep building. Every decision shapes your startup journey.";
};

  const generateReport = async () => {
  try {
    setLoading(true);

    const response = await fetch(
      "/api/report",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cash: gameState.cash,
          reputation: gameState.reputation,
          customers: gameState.customers,
          employees: gameState.employees,
          productQuality: gameState.productQuality,
        }),
      }
    );

    const data = await response.json();

    setReport(data.report);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  const handleChoice = (
  choice: (typeof scenarios)[0]["choices"][0]
) => {

  const dailyRevenue =
    gameState.customers * 200 +
    gameState.productQuality * 10;

  const employeeCost =
    gameState.employees * 5000;

  const netRevenue =
    dailyRevenue - employeeCost;

  setGameState({
    ...gameState,

    day: gameState.day + 1,

    cash:
      gameState.cash +
      choice.effects.cash +
      netRevenue,

    reputation:
      gameState.reputation +
      choice.effects.reputation,

    customers:
      gameState.customers +
      choice.effects.customers,

    employees:
      gameState.employees +
      choice.effects.employees,

    productQuality:
      gameState.productQuality +
      choice.effects.productQuality,
  });
};

  if (!currentScenario) {

  let tag = "";

  if (
    gameState.cash >= 1000000 &&
    gameState.reputation >= 100
  ) {
    tag = "🏆 Legendary Founder";
  } else if (
    gameState.cash >= 1000000
  ) {
    tag = "💰 Millionaire Entrepreneur";
  } else if (
    gameState.reputation >= 100
  ) {
    tag = "⭐ Reputed Entrepreneur";
  } else if (
    gameState.cash <= 0
  ) {
    tag = "💀 Startup Failed";
  } else {
    tag = "🚀 Growth Founder";
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Game Over</h1>

      <div className="bg-gray-900 p-6 rounded mb-6">
        <h2 className="text-2xl mb-2">{tag}</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>💰 Cash: ₹{gameState.cash}</div>
          <div>⭐ Reputation: {gameState.reputation}</div>
          <div>👥 Customers: {gameState.customers}</div>
          <div>👨‍💻 Employees: {gameState.employees}</div>
          <div>📦 Product Quality: {gameState.productQuality}</div>
          <div>📅 Days Survived: {gameState.day}</div>
        </div>
      </div>

      <button
  onClick={generateReport}
  className="bg-purple-600 p-3 rounded mr-4"
>
  🤖 Generate AI Report
</button>

      <button
        className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition"
        onClick={() =>
          setGameState({ ...initialGameState })
        }
      >
        
        Restart Game
      </button>

      {report && (
  <div className="bg-gray-900 p-6 rounded mt-6">
    <h2 className="text-xl font-bold mb-4">
      🤖 AI Founder Report
    </h2>

    <p className="whitespace-pre-wrap">
      {report}
    </p>
  </div>
)}
    </main>
  );
}
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-4">
        Day {gameState.day}
      </h1>
      <div className="bg-purple-900 border border-purple-500 p-4 rounded mb-6">
  <h3 className="font-bold mb-2">
    🤖 Startup Advisor
  </h3>

  <p>
    {getAdvisorMessage()}
  </p>
</div>

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

      <h2 className="text-xl mb-4">
        {currentScenario.title}
      </h2>

      <p className="mb-8">
        {currentScenario.question}
      </p>

      <div className="flex flex-col gap-4">
        {currentScenario.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice)}
            className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </main>
  );
}