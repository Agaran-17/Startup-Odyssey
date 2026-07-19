
import { scenarios } from "@/data/scenerios";

type Scenario = (typeof scenarios)[0];
type Choice = Scenario["choices"][0];



type ScenarioCardProps = {
  scenario: Scenario;
  onChoice: (choice: Choice) => void;
};

export default function ScenarioCard({
  scenario,
  onChoice,
}: ScenarioCardProps) {
  return (
    <>
      <h2 className="text-xl mb-4">
        {scenario.title}
      </h2>

      <p className="mb-8">
        {scenario.question}
      </p>

      <div className="flex flex-col gap-4">
        {scenario.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoice(choice)}
            className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </>
  );
}