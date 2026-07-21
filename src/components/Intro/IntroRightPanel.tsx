import FounderNameInput from "./FounderNameInput";
import ArchetypeGrid from "./ArchetypeGrid";
import LaunchButton from "./LaunchButton";

export default function IntroRightPanel() {
  return (
    <div className="flex justify-center">
      <div className="mt-44 w-full max-w-xl">

        {/* Heading */}

        <h1 className="text-5xl font-bold text-white">
          Create Your Founder
        </h1>

        {/* Subtitle */}

        <p className="mt-4 text-lg leading-8 text-gray-400">
          Choose your archetype and define your identity before launch.
        </p>

        {/* Founder Name */}

        <FounderNameInput />

        {/* Archetype */}

        <ArchetypeGrid />

        {/* Launch Button */}

        <LaunchButton />

      </div>
    </div>
  );
}