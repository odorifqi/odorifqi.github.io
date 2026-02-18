export interface Work {
  slug: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
  content: string;
}

export interface Publishing {
  slug: string;
  title: string;
  platform: string;
  url: string;
  date: string;
  thumbnail?: string;
  excerpt?: string;
  content: string;
}

export interface AboutData {
  title: string;
  content: string;
}

export interface ContactData {
  email: string;
  cvUrl: string;
  socials: {
    name: string;
    url: string;
  }[];
}
