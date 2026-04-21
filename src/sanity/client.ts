import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

/**
 * Client untuk fetch data publik (CDN, tanpa auth).
 * Gunakan ini di Server Components.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
