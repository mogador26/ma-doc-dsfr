import path from "node:path";
import { spawn } from "node:child_process";
import { prepareDocs } from "./filter-docs.mjs";

const ROOT = process.cwd();
const MODE = process.env.CCT_MODE || "public";

const SRC_DOCS = path.join(ROOT, "docs");
const OUT_DOCS = path.join(ROOT, ".docs-build", MODE);

prepareDocs({ mode: MODE, srcDocsDir: SRC_DOCS, outDocsDir: OUT_DOCS });

function runNode(args, envExtra = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, args, {
      stdio: "inherit",
      env: { ...process.env, ...envExtra }
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`node ${args.join(" ")} exited with code ${code}`));
    });
  });
}

function runNpx(cmd, args, envExtra = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.platform === "win32" ? "npx.cmd" : "npx", [cmd, ...args], {
      stdio: "inherit",
      env: { ...process.env, ...envExtra }
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

async function main() {
  // 1) Generate PDFs into OUT_DOCS/public/pdf (so they are included in the site build)
  await runNode([path.join(ROOT, "scripts", "generate-pdfs.mjs")], {
    DOCS_DIR: OUT_DOCS,
    CCT_MODE: MODE
  });

  // 2) Build site from filtered docs
  await runNpx("vitepress", ["build", OUT_DOCS], { DOCS_DIR: OUT_DOCS, CCT_MODE: MODE });

  console.log(`[build] OK (mode=${MODE})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
