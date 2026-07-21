import ArchetypeCard from "./ArchetypeCard";

export default function ArchetypeGrid() {
  return (
    <div className="mt-12">

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-purple-400">
        Founder Archetype
      </p>

      <div className="grid grid-cols-2 gap-5">

        <ArchetypeCard
          icon="📈"
          title="Growth Founder"
          subtitle="Data-driven scaling specialist"
          selected
        />

        <ArchetypeCard
          icon="⚡"
          title="Technical Founder"
          subtitle="Engineering-first product builder"
        />

        <ArchetypeCard
          icon="✨"
          title="Creative Founder"
          subtitle="Brand-led design visionary"
        />

        <ArchetypeCard
          icon="🎯"
          title="Sales Founder"
          subtitle="Revenue & relationship master"
        />

      </div>

    </div>
  );
}