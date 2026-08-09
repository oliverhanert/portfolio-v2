import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as sleep } from "node:timers/promises";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const distDir = path.join(root, "dist");
const pdfPath = path.join(root, "public/cv.pdf");
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

if (!fs.existsSync(distDir)) {
  console.error("dist/ not found — run pnpm build first.");
  process.exit(1);
}

function startPreview() {
  return spawn("pnpm", ["exec", "vite", "preview", "--port", String(port), "--host", "127.0.0.1"], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // preview not ready yet
    }
    await sleep(250);
  }
  throw new Error("Preview server did not start in time.");
}

const preview = startPreview();
preview.stderr?.on("data", (chunk) => process.stderr.write(chunk));

try {
  await waitForServer();

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--font-render-hinting=medium"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

  await page.goto(baseUrl, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    localStorage.setItem("portfolio-locale", "da");
  });

  await page.goto(`${baseUrl}/cv`, { waitUntil: "networkidle0" });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await sleep(400);

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  const distPdfPath = path.join(distDir, "cv.pdf");
  fs.copyFileSync(pdfPath, distPdfPath);

  await browser.close();
  console.log(`Generated ${pdfPath}`);
  console.log(`Copied to ${distPdfPath}`);
} finally {
  preview.kill("SIGTERM");
}
