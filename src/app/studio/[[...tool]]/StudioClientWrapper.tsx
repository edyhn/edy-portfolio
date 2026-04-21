"use client";

import dynamic from "next/dynamic";
import config from "../../../../sanity.config";

// Load NextStudio hanya di browser (SSR disabled)
// untuk menghindari Turbopack issue dengan Sanity ESM module graph
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioClientWrapper() {
  return (
    <div style={{ height: "100vh" }}>
      <NextStudio config={config} />
    </div>
  );
}
