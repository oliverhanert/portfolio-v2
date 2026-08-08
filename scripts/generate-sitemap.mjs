import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const SITE_URL = "https://oliverhanert.dk";

const projectsBase = readFileSync(join(root, "src/data/projects.base.ts"), "utf8");
const projectIds = [...projectsBase.matchAll(/id: "(\d+)"/g)].map((match) => match[1]);

const paths = ["/", "/contacts", "/funbox", ...projectIds.map((id) => `/projects/${id}`)];

const urls = paths
  .map((path) => {
    const loc = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    const priority = path === "/" ? "1.0" : path.startsWith("/projects/") ? "0.8" : "0.7";
  const changefreq = path === "/" ? "weekly" : "monthly";
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), sitemap);
console.log(`Generated sitemap with ${paths.length} URLs → public/sitemap.xml`);
