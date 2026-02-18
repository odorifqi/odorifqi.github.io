import { getAboutData } from "@/lib/content";

export default function AboutPage() {
  const about = getAboutData();

  return (
    <div className="px-4 md:px-10 lg:px-16 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">
        {about?.title || "About"}
      </h1>

      {about ? (
        <article className="max-w-3xl">
          {about.content.split("\n\n").map((paragraph, index) => {
            // Handle headers
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-semibold text-white mt-8 mb-4">
                  {paragraph.replace("## ", "")}
              </h2>
              );
            }
            
            // Handle horizontal rule
            if (paragraph.trim() === "---") {
              return <hr key={index} className="border-border my-8" />;
            }
            
            // Handle lists
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(line => line.startsWith("- "));
              return (
                <ul key={index} className="list-disc list-inside text-gray-400 my-4 space-y-2">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            
            // Handle bold text
            const formattedText = paragraph
              .replace(/\*\*(.*?)\*\*/g, "**$1**")
              .split("**")
              .map((part, i) => 
                i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
              );
            
            return (
              <p key={index} className="text-gray-400 leading-relaxed mb-4">
                {formattedText}
              </p>
            );
          })}
        </article>
      ) : (
        <p className="text-gray-400 text-lg">
          About content coming soon...
        </p>
      )}
    </div>
  );
}
