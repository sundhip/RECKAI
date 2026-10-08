export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  description: string;
  whatThisMeans: string;
  capabilities: string[];
  problemsWeSolve: string[];
  howWeWork: string[];
  technologies: string[];
  relatedProducts?: string[]; // e.g. ["omnixperience", "evolveaura", "organxcell", "finance"]
  relatedBuilds?: string[];
  featured: boolean;
  order: number;
  faqs?: ServiceFaq[];
}
