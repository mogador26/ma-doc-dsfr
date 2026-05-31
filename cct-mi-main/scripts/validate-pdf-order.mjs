import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DOCS = process.env.DOCS_DIR ? path.resolve(process.env.DOCS_DIR) : path.join(ROOT, "docs");

const THEMES = [
  { key: "presentation-generale", title: "Présentation Générale" },
  { key: "guide-integration", title: "Guide d’intégration" },
  { key: "produit-reference", title: "Produit de référence" },
  { key: "strategie-api", title: "Stratégie d’API" },
  { key: "circulation-donnee", title: "Circulation de la donnée" },
  { key: "hebergement", title: "Hébergement" }
];

const CHECK_GAPS = process.argv.includes("--check-gaps");

function splitFrontmatter(raw) {
  if (!raw.startsWith("---")) return { fm: "", body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { fm: "", body: raw };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trimStart();
  return { fm, body };
}

function readOrder(fmRaw) {
  if (!fmRaw) return { order: null, raw: null };

  // Capture original for better error messages
  const line = fmRaw.split("\n").find((l) => l.trim().startsWith("order:"));
  if (!line) return { order: null, raw: null };

  const m = line.match(/^order:\s*([^\s#]+)\s*$/);
  if (!m) return { order: null, raw: line };

  const n = Number(m[1]);
  if (!Number.isFinite(n)) return { order: NaN, raw: line };
  return { order: n, raw: line };
}

function listThemeFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort((a, b) => a.localeCompare(b, "fr"));
  // index.md first if present
  const index = files.includes("index.md") ? ["index.md"] : [];
  const rest = files.filter((f) => f !== "index.md");
  return [...index, ...rest].map((f) => path.join(dir, f));
}

function main() {
  let hasError = false;

  for (const t of THEMES) {
    const themeDir = path.join(DOCS, t.key);
    const files = listThemeFiles(themeDir);

    if (files.length === 0) continue;

    const seen = new Map(); // order -> [files]
    const ordered = []; // numeric orders for optional gap check

    for (const filePath of files) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { fm } = splitFrontmatter(raw);
      const { order, raw: rawLine } = readOrder(fm);

      if (order === null) continue;

      if (Number.isNaN(order)) {
        hasError = true;
        console.error(`[order][${t.key}] valeur invalide dans ${path.relative(ROOT, filePath)} → "${rawLine}"`);
        continue;
      }

      ordered.push(order);

      const k = String(order);
      if (!seen.has(k)) seen.set(k, []);
      seen.get(k).push(path.relative(ROOT, filePath));
    }

    // Duplicates check
    for (const [k, list] of seen.entries()) {
      if (list.length > 1) {
        hasError = true;
        console.error(`[order][${t.key}] doublon order=${k} dans:`);
        for (const p of list) console.error(`  - ${p}`);
      }
    }

    // Optional: gaps check for integer sequences only
    if (CHECK_GAPS) {
      const ints = ordered.filter((n) => Number.isInteger(n)).sort((a, b) => a - b);
      if (ints.length >= 2) {
        const gaps = [];
        for (let i = 1; i < ints.length; i++) {
          const prev = ints[i - 1];
          const cur = ints[i];
          if (cur - prev > 1) gaps.push([prev, cur]);
        }
        if (gaps.length) {
          console.warn(`[order][${t.key}] avertissement: trous dans la séquence (orders entiers) :`);
          for (const [a, b] of gaps) console.warn(`  - entre ${a} et ${b}`);
        }
      }
    }
  }

  if (hasError) {
    console.error("\nValidation order: ÉCHEC");
    process.exit(1);
  } else {
    console.log("Validation order: OK");
  }
}

main();
