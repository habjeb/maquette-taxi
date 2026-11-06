import { readFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const PAGE = "https://habjeb.github.io/maquette-taxi/";

type Copy = {
  title: string;
  description: string;
  imageAlt: string;
  faq: { q: string; a: string }[];
};

function seoPlugin(): Plugin {
  const copy = JSON.parse(readFileSync(new URL("./src/content/copy.json", import.meta.url), "utf8")) as Copy;
  const title = copy.title.trim();
  const description = copy.description.trim();
  if (title.length < 55 || title.length > 60) {
    throw new Error(`Titre SEO : ${title.length} caractères (attendu 55–60).`);
  }
  if (description.length < 150 || description.length > 160) {
    throw new Error(`Description SEO : ${description.length} caractères (attendu 150–160).`);
  }

  const image = `${PAGE}photos/volvo-berline.webp`;
  const taxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Taxi Pro",
    description,
    url: PAGE,
    image,
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "AdministrativeArea", name: "Métropole de Lyon" },
    ],
    availableLanguage: { "@type": "Language", name: "French", alternateName: "fr" },
    serviceType: "Taxi conventionné",
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const serialize = (data: unknown) => JSON.stringify(data).replaceAll("<", "\\u003c");

  return {
    name: "seo-head",
    transformIndexHtml(html) {
      return html
        .replaceAll("__SEO_TITLE__", title)
        .replaceAll("__SEO_DESCRIPTION__", description)
        .replaceAll("__SEO_IMAGE_ALT__", copy.imageAlt)
        .replace(
          "<!-- SEO-JSONLD -->",
          `<script type="application/ld+json">${serialize(taxiService)}</script>\n    <script type="application/ld+json">${serialize(faqPage)}</script>`,
        );
    },
  };
}

export default defineConfig({
  // Project site: https://habjeb.github.io/maquette-taxi/
  base: "/maquette-taxi/",
  plugins: [react(), seoPlugin()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
