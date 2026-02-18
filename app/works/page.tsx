import { getAllWorks } from "@/lib/content";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import WorksFilter from "@/components/WorksFilter";

export default function WorksPage() {
  const works = getAllWorks();

  return (
    <div className="px-4 md:px-10 lg:px-16 py-12">
      <FadeInWhenVisible>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Works</h1>
        <p className="text-gray-400 text-lg mb-8">
          A collection of my design projects, case studies, and experiments.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <WorksFilter works={works} />
      </FadeInWhenVisible>
    </div>
  );
}
