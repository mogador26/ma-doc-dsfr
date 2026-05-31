import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

/**
 * Extract YAML frontmatter if present.
 */
function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { fm: null, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { fm: null, body: raw };
  const fmRaw = raw.slice(3, end).trim();
  const body = raw.slice(end + 4);
  return { fm: fmRaw, body };
}

function parseAudience(fmRaw) {
  if (!fmRaw) return null;
  const m = fmRaw.match(/^audience:\s*(.+)$/m);
  if (!m) return null;
  // Accept: [public, interne] or ["public","interne"]
  const v = m[1].trim();
  try {
    // JSON-like
    if (v.startsWith("[")) return JSON.parse(v.replace(/'/g, '"'));
  } catch {}
  // YAML-like simple list not supported here; keep null
  return null;
}

function shouldIncludeMarkdown(filePath, mode) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { fm } = parseFrontmatter(raw);
  const aud = parseAudience(fm);
  if (!aud) return true; // default: included in both modes
  return aud.includes(mode);
}

function copyDir(src, dst, mode) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);

    if (entry.isDirectory()) {
      copyDir(s, d, mode);
      continue;
    }

    if (entry.isFile()) {
      if (entry.name.endsWith(".md")) {
        if (!shouldIncludeMarkdown(s, mode)) continue;
      }
      fs.mkdirSync(path.dirname(d), { recursive: true });
      fs.copyFileSync(s, d);
    }
  }
}

export function prepareDocs({ mode, srcDocsDir, outDocsDir }) {
  if (!["public", "interne"].includes(mode)) throw new Error(`Mode invalide: ${mode}`);
  if (fs.existsSync(outDocsDir)) fs.rmSync(outDocsDir, { recursive: true, force: true });

  copyDir(srcDocsDir, outDocsDir, mode);
}
