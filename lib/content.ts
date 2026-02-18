import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Work, Publishing, AboutData, ContactData } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");

// ============ WORKS ============

export function getAllWorks(): Work[] {
  const worksDirectory = path.join(contentDirectory, "works");
  
  if (!fs.existsSync(worksDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(worksDirectory);
  
  const works = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(worksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        source: data.source || "",
        sourceUrl: data.sourceUrl || "",
        date: data.date || "",
        category: data.category || "",
        image: data.image || "",
        featured: data.featured || false,
        content,
      };
    });

  // Sort by date (newest first)
  return works.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getWorkBySlug(slug: string): Work | null {
  const fullPath = path.join(contentDirectory, "works", `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    source: data.source || "",
    sourceUrl: data.sourceUrl || "",
    date: data.date || "",
    category: data.category || "",
    image: data.image || "",
    featured: data.featured || false,
    content,
  };
}

export function getFeaturedWorks(): Work[] {
  return getAllWorks().filter((work) => work.featured);
}

// ============ PUBLISHING ============

export function getAllPublishing(): Publishing[] {
  const publishingDirectory = path.join(contentDirectory, "publishing");
  
  if (!fs.existsSync(publishingDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(publishingDirectory);
  
  const publishing = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(publishingDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        platform: data.platform || "",
        url: data.url || "",
        date: data.date || "",
        thumbnail: data.thumbnail || "",
        excerpt: data.excerpt || "",
        content,
      };
    });

  // Sort by date (newest first)
  return publishing.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPublishingByPlatform(platform: string): Publishing[] {
  return getAllPublishing().filter(
    (item) => item.platform.toLowerCase() === platform.toLowerCase()
  );
}

// ============ ABOUT ============

export function getAboutData(): AboutData | null {
  const fullPath = path.join(contentDirectory, "about.md");
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title || "About",
    content,
  };
}

// ============ CONTACT ============

export function getContactData(): ContactData | null {
  const fullPath = path.join(contentDirectory, "contact.md");
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    email: data.email || "",
    cvUrl: data.cvUrl || "",
    socials: data.socials || [],
  };
}
