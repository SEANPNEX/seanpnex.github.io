import path from "node:path";
import fs from "node:fs";

// Site source root (VitePress runs from the repo root).
const ROOT = path.resolve();

// Readable names for curriculum folders. Folders not listed fall back to
// their own name with any "C1 " / "M1 " ordering prefix removed.
export const GROUP_LABELS = {
  "C0 Ethics": "Ethical & Professional Standards",
  "C1 Quantity": "Quantitative Methods",
  "C2 Economics": "Economics",
  "C3 Financial Statements": "Financial Statement Analysis",
  "C4 Corporate Finance": "Corporate Issuers",
  "C5 Equity": "Equity Valuation",
  "C6 Fixed Income": "Fixed Income",
  "C7 Derivative": "Derivatives",
  "C8 Alternative": "Alternative Investments",
  "C9 Portfolio Theory": "Portfolio Management",
  Quiz: "Quiz & Flashcards",
  coding_notes: "Technical Notes",
  system_design: "System Design",
};

// A note with less body text than this is shown as an outline, not a full note.
const OUTLINE_LIMIT = 1500;

const IGNORED = new Set([".obsidian", ".DS_Store", "assets", "index.md"]);

const byName = (a, b) => a.localeCompare(b, "en", { numeric: true });
const stripPrefix = (name) => name.replace(/\.md$/, "").replace(/^[A-Z]?\d+[\s_-]+/, "");

function readFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: source };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^(title|draft|order):\s*(.+)$/);
    if (field) data[field[1]] = field[2].trim().replace(/^['"]|['"]$/g, "");
  }
  return { data, body: source.slice(match[0].length) };
}

/**
 * Read one markdown file.
 * status: "draft" (`draft: true`) and "planned" (empty) are not published;
 *         "outline" (headings and a few lines) and "written" are.
 */
function readNote(file, link) {
  const { data, body } = readFrontmatter(fs.readFileSync(file, "utf8"));
  const text = body.trim();
  const heading = text.match(/^#\s+(.+)$/m)?.[1].trim();
  const status = data.draft === "true" ? "draft"
    : !text ? "planned"
    : text.length < OUTLINE_LIMIT ? "outline" : "written";
  return {
    type: "note",
    file: path.relative(ROOT, file),
    link,
    text: data.title || stripPrefix(path.basename(file)) || heading,
    order: Number(data.order ?? Infinity),
    status,
  };
}

// Build the folder tree: notes first (by `order`, then name), then subfolders.
function scan(dir, link) {
  const entries = fs.readdirSync(dir).filter((name) => !IGNORED.has(name) && !name.startsWith("."));
  const notes = [];
  const groups = [];
  for (const name of entries.sort(byName)) {
    const full = path.join(dir, name);
    if (fs.lstatSync(full).isDirectory()) {
      groups.push({
        type: "group",
        text: GROUP_LABELS[name] ?? stripPrefix(name),
        items: scan(full, `${link}/${name}`),
      });
    } else if (name.endsWith(".md")) {
      notes.push(readNote(full, `${link}/${name.replace(/\.md$/, "")}`));
    }
  }
  notes.sort((a, b) => a.order - b.order);
  return [...notes, ...groups];
}

const isPublished = (note) => note.status === "outline" || note.status === "written";

// `labels` translates group names (English label → localized label).
const published = (items, labels = {}) => items.flatMap((item) => {
  if (item.type === "note") return !isPublished(item) ? [] : [{ text: item.text, link: item.link }];
  const children = published(item.items, labels);
  return children.length ? [{ text: labels[item.text] ?? item.text, collapsed: true, items: children }] : [];
});

/**
 * Sidebar for one section. VitePress derives prev/next links from this order,
 * so the sidebar is the single source of truth for page sequence.
 * `before` items (e.g. a link back to an overview page) are prepended.
 */
export const set_sidebar = (pathname, { before = [], labels } = {}) =>
  [...before, ...published(scan(path.join(ROOT, pathname), pathname), labels)];

/** Every published note under `pathname`, flattened: [{ text, link }]. */
export function publishedNotes(pathname) {
  const flatten = (items) => items.flatMap((item) => (item.items ? flatten(item.items) : [item]));
  return flatten(published(scan(path.join(ROOT, pathname), pathname)));
}

/** Unpublished notes, relative to the site root, for `srcExclude`. */
export function unpublishedNotes(pathname) {
  const walk = (items) => items.flatMap((item) =>
    item.type === "group" ? walk(item.items) : isPublished(item) ? [] : [item.file]);
  return walk(scan(path.join(ROOT, pathname), pathname))
    .map((file) => file.split(path.sep).join("/").replace(/[()[\]{}*?!]/g, "\\$&"));
}

/** Every curriculum note including planned (empty) ones, grouped by top-level folder — for directory pages. */
export function noteIndex(pathname) {
  const flatten = (items) => items.flatMap((item) => (item.type === "group" ? flatten(item.items) : [item]));
  const tree = scan(path.join(ROOT, pathname), pathname);
  return tree
    .filter((item) => item.type === "group")
    .map((group) => ({
      text: group.text,
      notes: flatten(group.items).filter((note) => note.status !== "draft").map(({ text, link, status }) => ({ text, link, status })),
    }));
}
