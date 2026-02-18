import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { Work } from "@/types";

interface WorkCardProps {
  work: Work;
}

const categoryColors: Record<string, string> = {
  "Case Study": "bg-blue-600 text-white",
  "UI Design": "bg-purple-600 text-white",
  "UX Design": "bg-pink-600 text-white",
  "Writing": "bg-green-600 text-white",
  "Code": "bg-orange-600 text-white",
};

const sourceColors: Record<string, string> = {
  Medium: "bg-gray-800 text-white",
  Dribbble: "bg-pink-500 text-white",
  Behance: "bg-blue-600 text-white",
  GitHub: "bg-gray-900 text-white",
};

export default function WorkCard({ work }: WorkCardProps) {
  const badgeClass = sourceColors[work.source] || categoryColors[work.category] || "bg-gray-700 text-white";

  return (
    <a
      href={work.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden border border-border hover:border-accent transition-all"
    >
      <div className="relative">
        <Image
          src={work.image}
          alt={work.title}
          width={600}
          height={400}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full ${badgeClass}`}
        >
          {work.source}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-medium group-hover:text-accent transition-colors line-clamp-2">
            {work.title}
          </h3>
          <TbArrowUpRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1 group-hover:text-accent transition-colors" />
        </div>
        <p className="text-gray-400 text-xs mt-2 uppercase tracking-wider">
          {work.category}
        </p>
      </div>
    </a>
  );
}
