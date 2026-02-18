"use client";

import { useState } from "react";
import { Work } from "@/types";
import WorkCard from "@/components/WorkCard";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

const filters = [
  { label: "All", value: "all" },
  { label: "UI/UX Case Studies", value: "Case Study" },
  { label: "UI/UX Design", value: "UI Design" },
  { label: "Writing", value: "Writing" },
  { label: "Code", value: "Code" },
];

interface WorksFilterProps {
  works: Work[];
}

export default function WorksFilter({ works }: WorksFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredWorks =
    activeFilter === "all"
      ? works
      : works.filter((work) => work.category === activeFilter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 text-sm border transition-colors ${
              activeFilter === filter.value
                ? "bg-accent text-[#0a0a0a] border-accent font-medium"
                : "border-border text-gray-400 hover:text-white hover:border-accent"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filteredWorks.length === 0 ? (
        <p className="text-gray-500">No works found.</p>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWorks.map((work) => (
            <StaggerItem key={work.slug}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </>
  );
}
