"use client";

import { useEffect, useState } from "react";

export default function LeftSidebar() {
  const [founderName, setFounderName] = useState("Founder");

  useEffect(() => {
    const savedName = localStorage.getItem("founderName");

    if (savedName) {
      setFounderName(savedName);
    }
  }, []);

  return (
    <div className="px-6 pt-15 pb-8">
      {/* Profile Card */}

      <div className="rounded-3xl border border-white/10 bg-[#13111d]/90 p-8">
        {/* Avatar */}

        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-5xl font-bold text-white shadow-[0_0_60px_rgba(139,92,246,.35)]">
          {founderName.charAt(0).toUpperCase()}
        </div>

        {/* Founder Name */}

        <h2 className="mt-6 text-center text-5xl font-bold text-white">
          {founderName}
        </h2>

        {/* Founder Type */}

        <p className="mt-2 text-center text-xl text-gray-400">
          Growth Founder
        </p>

        {/* Stage */}

        <div className="mt-8 flex justify-center">
          <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2 text-lg font-medium text-purple-300">
            ● PRE-SEED
          </span>
        </div>

        {/* Progress */}

        <div className="mt-10 space-y-6">
          <div>
            <div className="mb-2 flex justify-between text-lg text-gray-300">
              <span>Reputation</span>
              <span>45</span>
            </div>

            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 w-[45%] rounded-full bg-purple-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-lg text-gray-300">
              <span>Founder Score</span>
              <span>50</span>
            </div>

            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 w-[50%] rounded-full bg-cyan-400"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-lg text-gray-300">
              <span>Product Quality</span>
              <span>60</span>
            </div>

            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 w-[60%] rounded-full bg-emerald-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-[#13111d]/90 p-7">
        <h3 className="mb-6 text-xl font-semibold text-white">
          Quick Stats
        </h3>

        <div className="space-y-4 text-gray-300">
          <div className="flex justify-between">
            <span>👥 Customers</span>
            <span>12</span>
          </div>

          <div className="flex justify-between">
            <span>🏗 Team Size</span>
            <span>3 members</span>
          </div>

          <div className="flex justify-between">
            <span>⏳ Days Left</span>
            <span>29 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}