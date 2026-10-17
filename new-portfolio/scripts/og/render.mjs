import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "og-template.html");
const outPng = path.join(__dirname, "og-image.png");
const outJpg = path.join(__dirname, "..", "..", "public", "og-image.jpg");
const appleTouch = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "apple-touch-icon.jpg"
);
const portrait = path.join(__dirname, "portrait.png");

const chrome =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const fileUrl = `file://${htmlPath}`;

const run = (bin, args) =>
  new Promise((resolve, reject) => {
    const child = spawn(bin, args, { stdio: "inherit" });
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${bin} exited ${code}`))
    );
  });

await run(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--default-background-color=00061122",
  "--virtual-time-budget=5000",
  "--window-size=1200,630",
  `--screenshot=${outPng}`,
  fileUrl,
]);

await run("sips", [
  "-s",
  "format",
  "jpeg",
  "-s",
  "formatOptions",
  "92",
  outPng,
  "--out",
  outJpg,
]);
await run("sips", ["-z", "630", "1200", outJpg]);

// Apple touch from the real portrait
await run("sips", ["-z", "180", "180", portrait, "--out", appleTouch]);
await run("sips", [
  "-s",
  "format",
  "jpeg",
  "-s",
  "formatOptions",
  "90",
  appleTouch,
  "--out",
  appleTouch,
]);

fs.rmSync(outPng, { force: true });

console.log(`Wrote ${outJpg}`);
console.log(`Wrote ${appleTouch}`);
