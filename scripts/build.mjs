import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true });
}

mkdirSync(dist, { recursive: true });

[
  "index.html",
  "app.js",
  "styles.css",
  "README.md"
].forEach((file) => {
  cpSync(join(root, file), join(dist, file));
});
