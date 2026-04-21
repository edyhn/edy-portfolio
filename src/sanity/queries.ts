import { client } from "./client";
import type { SanityDesign, SanityExperience, SanityProject, SanityPost } from "@/lib/types";

const fetchOptions = { next: { revalidate: 60 } };

export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch<SanityProject[]>(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      tags,
      image,
      href,
      github,
      featured,
      order
    }`,
    {},
    fetchOptions
  );
}

export async function getAllExperiences(): Promise<SanityExperience[]> {
  return client.fetch<SanityExperience[]>(
    `*[_type == "experience"] | order(order asc) {
      _id,
      company,
      role,
      period,
      description,
      order
    }`,
    {},
    fetchOptions
  );
}

export async function getAllDesigns(): Promise<SanityDesign[]> {
  return client.fetch<SanityDesign[]>(
    `*[_type == "design"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      category,
      coverImage,
      tools,
      behanceUrl,
      description,
      featured,
      order
    }`,
    {},
    fetchOptions
  );
}

export async function getAllPosts(): Promise<SanityPost[]> {
  return client.fetch<SanityPost[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      excerpt
    }`,
    {},
    fetchOptions
  );
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch<SanityPost | null>(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      excerpt,
      body
    }`,
    { slug },
    fetchOptions
  );
}
