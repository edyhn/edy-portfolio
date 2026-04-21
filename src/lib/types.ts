// ─── Tipe lama (masih digunakan di komponen statis) ─────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
  github?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: "frontend" | "backend" | "tool" | "design";
}

export interface Social {
  label: string;
  href: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

// ─── Tipe Sanity (dari CMS) ──────────────────────────────────────────────────

export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image?: any;
  href?: string;
  github?: string;
  featured?: boolean;
  order?: number;
}

export interface SanityExperience {
  _id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  order?: number;
}

export interface SanityDesign {
  _id: string;
  title: string;
  slug: string;
  category: "branding" | "uiux" | "poster" | "social" | "illustration" | "other";
  coverImage: any;
  tools?: string[];
  behanceUrl?: string;
  description?: string;
  featured?: boolean;
  order?: number;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  mainImage?: any;
  excerpt?: string;
  // Use any for PortableText blocks for simplicity, actual type is PortableTextBlock[]
  body?: any[];
}
