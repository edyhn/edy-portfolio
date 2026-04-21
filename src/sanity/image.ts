import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

/**
 * Helper untuk generate URL gambar dari Sanity CDN.
 * Contoh: urlFor(image).width(800).url()
 */
export const urlFor = (source: any) => {
  return imageBuilder.image(source);
};
