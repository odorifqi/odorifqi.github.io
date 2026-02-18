import Image from "next/image";
import Link from "next/link";
import { getFeaturedWorks } from "@/lib/content";
import WorkCard from "@/components/WorkCard";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function Home() {
  const featuredWorks = getFeaturedWorks();

  return (
    <div className="px-4 md:px-10 lg:px-16">
      {/* Hero Section */}
      <AnimatedSection className="py-12 lg:py-20">
        <header className="flex gap-2 md:gap-4 items-center justify-center mb-12">
          <Image
            src="/images/works/logo-dark.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-12 md:w-16 lg:w-20"
          />
          <div className="flex flex-wrap gap-1 md:gap-3 items-center justify-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-semibold">
              Rifqi
            </h1>
            <span className="text-xl md:text-3xl lg:text-5xl text-gray-400 font-light font-secondary">
              /rēf-kē/
            </span>
            <span className="text-xl md:text-3xl lg:text-5xl text-gray-400 font-light font-secondary hidden sm:inline">
              (he/him)
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="flex flex-col justify-center pb-8 md:px-16 lg:px-48 lg:text-2xl text-base text-foreground tracking-wide leading-relaxed text-center">
          <p>
            Product designer and software engineer who thrives on crafting immersive digital app experiences.
            Proficient both in UI/UX design and front-end development to translate design concepts into responsive and interactive apps.
            Collaborative professional with a keen eye for detail and a passion for staying updated with industry trends and technologies
            to deliver exceptional user experiences.
          </p>
        </section>
      </AnimatedSection>

      {/* Featured Works Section */}
      {featuredWorks.length > 0 && (
        <FadeInWhenVisible className="py-12 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium text-white">Featured Works</h2>
            <Link
              href="/works"
              className="text-accent hover:underline text-sm"
            >
              View all →
            </Link>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredWorks.slice(0, 3).map((work) => (
              <StaggerItem key={work.slug}>
                <WorkCard work={work} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInWhenVisible>
      )}

      {/* Quick Links */}
      <FadeInWhenVisible className="py-12 border-t border-border" delay={0.2}>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <StaggerItem>
            <Link
              href="/works"
              className="group block p-6 border border-border hover:border-accent transition-all hover:-translate-y-1"
            >
              <h2 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                Works
              </h2>
              <p className="text-gray-400 text-sm">
                Explore my design projects and case studies
              </p>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/about"
              className="group block p-6 border border-border hover:border-accent transition-all hover:-translate-y-1"
            >
              <h2 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                About
              </h2>
              <p className="text-gray-400 text-sm">
                Learn more about my background and skills
              </p>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </FadeInWhenVisible>
    </div>
  );
}
