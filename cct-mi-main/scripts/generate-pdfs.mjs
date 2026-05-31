import fs from "node:fs";
import path from "node:path";
import MarkdownIt from "markdown-it";
import { chromium } from "playwright";

const ROOT = process.cwd();
const DOCS = process.env.DOCS_DIR ? path.resolve(process.env.DOCS_DIR) : path.join(ROOT, "docs");
const OUT_DIR = path.join(ROOT, "dist-pdf");
const PUBLIC_PDF = path.join(DOCS, "public", "pdf");

const THEMES = [
  { key: "presentation-generale", title: "Présentation Générale", out: "presentation-generale.pdf" },
  { key: "guide-integration", title: "Guide d’intégration", out: "guide-integration.pdf" },
  { key: "produit-reference", title: "Produit de référence", out: "produit-reference.pdf" },
  { key: "strategie-api", title: "Stratégie d’API", out: "strategie-api.pdf" },
  { key: "circulation-donnee", title: "Circulation de la donnée", out: "circulation-donnee.pdf" },
  { key: "hebergement", title: "Hébergement", out: "hebergement.pdf" }
];

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isFile() && e.name.endsWith(".md") && e.name !== "index.md") out.push(p);
  }
  out.sort((a, b) => a.localeCompare(b, "fr"));
  return out;
}

/**
 * Split YAML frontmatter (very small parser).
 * Returns { fm, body } where fm is raw YAML content (string), body is markdown body.
 */
function splitFrontmatter(raw) {
  if (!raw.startsWith("---")) return { fm: "", body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { fm: "", body: raw };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trimStart();
  return { fm, body };
}

/**
 * Reads `order: <number>` from fm.
 * Supports int and decimal (e.g. 10, 10.1, 2.05).
 */
function readOrderFromFrontmatter(fmRaw) {
  if (!fmRaw) return null;
  const m = fmRaw.match(/^order:\s*([0-9]+(?:\.[0-9]+)?)\s*$/m);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

function mdFileToSection(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { fm, body } = splitFrontmatter(raw);

  const order = readOrderFromFrontmatter(fm);
  const html = md.render(body);
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = h1 || path.basename(filePath, ".md");

  return {
    title,
    html,
    order,
    fileName: path.basename(filePath),
    filePath
  };
}

function loadDsfrCss() {
  const candidates = [
    path.join(ROOT, "node_modules/@gouvfr/dsfr/dist/dsfr/dsfr.min.css"),
    path.join(ROOT, "node_modules/@gouvfr/dsfr/dist/dsfr/dsfr.css")
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return fs.readFileSync(c, "utf-8");
  }
  return "";
}

function baseCss() {
  return `
@page { margin: 18mm 15mm; }
html, body { font-family: Marianne, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
h1 { font-size: 20px; margin: 0 0 10px 0; }
h2 { font-size: 18px; margin: 22px 0 10px; }
h3 { font-size: 15px; margin: 18px 0 8px; }
p, li { font-size: 11.5px; line-height: 1.45; }
code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
pre { padding: 10px; border: 1px solid #ddd; white-space: pre-wrap; word-break: break-word; }
hr { border: 0; border-top: 1px solid #ddd; margin: 16px 0; }
.toc a { text-decoration: none; color: inherit; }
.toc li { margin: 3px 0; }
.section { break-before: page; }
.section:first-of-type { break-before: auto; }
.meta { font-size: 10px; color: #666; margin: 8px 0 0; }
 table {width: 100%; table-layout: fixed; border: 1px solid black; border-collapse: collapse;}
 td {word-wrap: break-word; border: 1px solid black; }
.statut_R {background-color: #93F7A2;}
.statut_A {background-color: #ECAAFD;}
.statut_M {background-color: #F7F493;}
.statut_O {background-color: #ECAAAA;}
.new_open {color: green; font-weight: bold;}
.maj_open {color: blue; font-weight: bold;}
.del_open {color: red; font-weight: bold;}
.inc_open {font-weight: bold;}
.new_nonopen {color: green; font-weight: normal;}
.maj_nonopen {color: blue; font-weight: normal;}
.del_nonopen {color: red; font-weight: normal;}
.inc_nonopen {font-weight: normal;}
.comm_italic {font-style: italic;}
.comm_comp_tit {color: orange; text-decoration: underline;}
.comm_comp {color: orange;}
`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildHtmlDoc({ themeTitle, sections }) {
  const dsfrCss = loadDsfrCss();
  const toc = sections
    .map((s, i) => `<li><a href="#sec-${i}">${escapeHtml(s.title)}</a></li>`)
    .join("");

  const body = `
<h1>${escapeHtml(themeTitle)}</h1>
<p class="meta">Généré automatiquement depuis les pages Markdown du thème.</p>
<hr />
<h2>Sommaire</h2>
<ol class="toc">${toc}</ol>
<hr />
${sections
  .map(
    (s, i) => `
<div class="section" id="sec-${i}">
  <h2>${escapeHtml(s.title)}</h2>
  ${s.html}
</div>`
  )
  .join("\n")}
`;

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>${dsfrCss}</style>
  <style>${baseCss()}</style>
  <title>${escapeHtml(themeTitle)}</title>
</head>
<body>${body}</body>
</html>`;
}

function sortSections(sections) {
  // Order pages with `order` first; then pages without order by filename
  sections.sort((a, b) => {
    const ao = a.order;
    const bo = b.order;

    if (ao != null && bo != null) return ao - bo;
    if (ao != null) return -1;
    if (bo != null) return 1;

    return a.fileName.localeCompare(b.fileName, "fr");
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(PUBLIC_PDF, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const t of THEMES) {
    const dir = path.join(DOCS, t.key);
    if (!fs.existsSync(dir)) continue;

    const files = [path.join(dir, "index.md"), ...listMarkdownFiles(dir)].filter((p) => fs.existsSync(p));
    const sections = files.map(mdFileToSection);

    sortSections(sections);

    const html = buildHtmlDoc({ themeTitle: t.title, sections });
    await page.setContent(html, { waitUntil: "load" });

    const outPath = path.join(OUT_DIR, t.out);
    await page.pdf({ path: outPath, format: "A4", printBackground: true });

    const publicPath = path.join(PUBLIC_PDF, t.out);
    fs.copyFileSync(outPath, publicPath);

    console.log(
      `[pdf] généré: ${path.relative(ROOT, outPath)} (et copié vers ${path.relative(ROOT, publicPath)})`
    );
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
