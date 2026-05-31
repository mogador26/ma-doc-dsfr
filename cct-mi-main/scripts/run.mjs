import path from "node:path";
import { spawn } from "node:child_process";
import { prepareDocs } from "./filter-docs.mjs";

const ROOT = process.cwd();
const MODE = process.env.CCT_MODE || "public";
const CMD = process.argv[2]; // dev | build | preview

const SRC_DOCS = path.join(ROOT, "docs");
const OUT_DOCS = path.join(ROOT, ".docs-build", MODE);

prepareDocs({ mode: MODE, srcDocsDir: SRC_DOCS, outDocsDir: OUT_DOCS });

const argsByCmd = {
  dev: ["vitepress", "dev", OUT_DOCS, "--host", "0.0.0.0", "--port", "5173"],
  build: ["vitepress", "build", OUT_DOCS],
  preview: ["vitepress", "preview", OUT_DOCS, "--host", "0.0.0.0", "--port", "4173"]
};

if (!argsByCmd[CMD]) {
  console.error("Usage: node scripts/run.mjs <dev|build|preview>");
  process.exit(1);
}

const child = spawn(process.platform === "win32" ? "npx.cmd" : "npx", argsByCmd[CMD], {
  stdio: "inherit",
  env: {
    ...process.env,
    CCT_MODE: MODE,
    DOCS_DIR: OUT_DOCS
  }
});

child.on("exit", (code) => process.exit(code ?? 1));
