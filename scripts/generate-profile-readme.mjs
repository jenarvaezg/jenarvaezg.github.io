#!/usr/bin/env node
// Generates the "Featured Projects" + "Advent of Code" blocks for jenarvaezg/README.md
// (the GitHub profile repo). The canonical source is src/data/projects.json + aoc.json.
//
// Usage:
//   node scripts/generate-profile-readme.mjs                        # print to stdout
//   node scripts/generate-profile-readme.mjs --write PATH           # rewrite the markers in PATH
//   node scripts/generate-profile-readme.mjs --enrich [--write PATH]
//
// --enrich fetches live star counts from the GitHub API (uses GITHUB_TOKEN if set).
// Fetch failures degrade gracefully to non-enriched output, so local dry runs stay
// deterministic and offline-safe unless the flag is passed.
//
// Markers in the target README (jenarvaezg/README.md):
//   <!-- PROJECTS:START --> ... <!-- PROJECTS:END -->
//   <!-- AOC:START -->      ... <!-- AOC:END -->

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsPath = resolve(__dirname, "../src/data/projects.json");
const aocPath = resolve(__dirname, "../src/data/aoc.json");

const projects = JSON.parse(readFileSync(projectsPath, "utf8"));
const aoc = JSON.parse(readFileSync(aocPath, "utf8"));

// Grouping shown in the profile README. The README is English-only (see
// jenarvaezg/AGENTS.md), so labels live here instead of projects.json.
const CATEGORIES = {
  "civic-tech": "🇪🇸 Civic tech for Spain",
  "personal-finance": "📈 Personal finance",
  fun: "😄 Just for fun",
};

// Star counts below this read as noise; they appear once a repo earns them.
const MIN_STARS_TO_SHOW = 3;

// --- Validation ------------------------------------------------------------

const errors = [];
const isHttps = (s) => typeof s === "string" && /^https:\/\/[^\s]+$/.test(s);
const isNonEmptyString = (s) => typeof s === "string" && s.trim().length > 0;

if (!Array.isArray(projects) || projects.length === 0) {
  errors.push("projects.json must be a non-empty array");
}

const projectNames = new Set();
let spotlightCount = 0;
projects.forEach((p, i) => {
  const where = `projects[${i}]${p?.name ? ` (${p.name})` : ""}`;
  if (!isNonEmptyString(p?.name)) errors.push(`${where}: missing or empty 'name'`);
  if (p?.name && projectNames.has(p.name)) errors.push(`${where}: duplicate 'name' "${p.name}"`);
  if (p?.name) projectNames.add(p.name);
  if (!isNonEmptyString(p?.tech)) errors.push(`${where}: missing or empty 'tech'`);
  if (!isHttps(p?.url)) errors.push(`${where}: 'url' must start with https://`);
  if (p?.homepage !== undefined && !isHttps(p.homepage)) {
    errors.push(`${where}: 'homepage' must start with https:// when present`);
  }
  if (!p?.description || typeof p.description !== "object") {
    errors.push(`${where}: missing 'description' object`);
  } else {
    for (const lang of ["en", "es"]) {
      if (!isNonEmptyString(p.description[lang])) {
        errors.push(`${where}: 'description.${lang}' is missing or empty`);
      }
    }
  }
  if (!(p?.category in CATEGORIES)) {
    errors.push(
      `${where}: 'category' must be one of: ${Object.keys(CATEGORIES).join(", ")}`,
    );
  }
  if (p?.spotlight !== undefined) {
    spotlightCount += 1;
    for (const lang of ["en", "es"]) {
      const hl = p.spotlight?.highlights?.[lang];
      if (!Array.isArray(hl) || hl.length === 0 || !hl.every(isNonEmptyString)) {
        errors.push(
          `${where}: 'spotlight.highlights.${lang}' must be a non-empty array of strings`,
        );
      }
    }
  }
});
if (spotlightCount > 1) {
  errors.push(`at most one project can have 'spotlight' (found ${spotlightCount})`);
}

if (!Array.isArray(aoc) || aoc.length === 0) {
  errors.push("aoc.json must be a non-empty array");
}

const aocYears = new Set();
aoc.forEach((entry, i) => {
  const where = `aoc[${i}]${entry?.year ? ` (${entry.year})` : ""}`;
  if (typeof entry?.year !== "number" || !Number.isInteger(entry.year)) {
    errors.push(`${where}: 'year' must be an integer`);
  } else if (aocYears.has(entry.year)) {
    errors.push(`${where}: duplicate year ${entry.year}`);
  } else {
    aocYears.add(entry.year);
  }
  if (!isNonEmptyString(entry?.lang)) errors.push(`${where}: missing or empty 'lang'`);
  if (!isNonEmptyString(entry?.repo)) errors.push(`${where}: missing or empty 'repo'`);
});

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}

// --- Enrichment (GitHub API, opt-in via --enrich) ----------------------------

const enrich = process.argv.includes("--enrich");
const starsByName = new Map();

if (enrich) {
  const headers = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  await Promise.all(
    projects.map(async (p) => {
      const match = p.url.match(/^https:\/\/github\.com\/([^/]+\/[^/]+?)\/?$/);
      if (!match) return;
      try {
        const res = await fetch(`https://api.github.com/repos/${match[1]}`, {
          headers,
          signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (typeof data.stargazers_count === "number") {
          starsByName.set(p.name, data.stargazers_count);
        }
      } catch (err) {
        console.warn(`enrich: skipping ${p.name} (${err.message})`);
      }
    }),
  );
}

// --- Generation ------------------------------------------------------------

const starsSuffix = (name) => {
  const stars = starsByName.get(name);
  return stars >= MIN_STARS_TO_SHOW ? ` ⭐ ${stars}` : "";
};

const projectLink = (p) =>
  p.homepage ? `[${p.name}](${p.homepage})` : `[${p.name}](${p.url})`;

const spotlightProject = projects.find((p) => p.spotlight);

const spotlightBlock = spotlightProject
  ? [
      `### 🚧 Now building — ${projectLink(spotlightProject)}${
        spotlightProject.homepage ? ` ([source](${spotlightProject.url}))` : ""
      }${starsSuffix(spotlightProject.name)}`,
      "",
      spotlightProject.description.en,
      "",
      ...spotlightProject.spotlight.highlights.en.map((h) => `- ${h}`),
    ]
  : [];

const groupedBlocks = Object.entries(CATEGORIES).flatMap(([key, label]) => {
  const group = projects.filter((p) => p.category === key && p !== spotlightProject);
  if (group.length === 0) return [];
  return [
    "",
    `**${label}**`,
    "",
    ...group.map(
      (p) => `- ${projectLink(p)} — ${p.description.en} \`${p.tech}\`${starsSuffix(p.name)}`,
    ),
  ];
});

const projectsBlock = [...spotlightBlock, ...groupedBlocks].join("\n").trim();

const aocBlock = (() => {
  const sorted = [...aoc].sort((a, b) => b.year - a.year);
  const mid = Math.ceil(sorted.length / 2);
  const left = sorted.slice(0, mid);
  const right = sorted.slice(mid);
  const lines = [];
  for (let i = 0; i < left.length; i += 1) {
    const l = `${left[i].year} → ${left[i].lang.padEnd(10, " ")}`;
    const r = right[i] ? `${right[i].year} → ${right[i].lang}` : "";
    lines.push(`${l}    ${r}`.trimEnd());
  }
  return ["```", ...lines, "```"].join("\n");
})();

const output = `<!-- PROJECTS:START -->
${projectsBlock}
<!-- PROJECTS:END -->

<!-- AOC:START -->
${aocBlock}
<!-- AOC:END -->`;

const writeIdx = process.argv.indexOf("--write");
if (writeIdx === -1) {
  console.log(output);
  process.exit(0);
}

const targetPath = process.argv[writeIdx + 1];
if (!targetPath) {
  console.error("--write requires a path argument");
  process.exit(1);
}

const original = readFileSync(targetPath, "utf8");
const replaceBlock = (src, name, replacement) => {
  const re = new RegExp(`<!-- ${name}:START -->[\\s\\S]*?<!-- ${name}:END -->`, "m");
  if (!re.test(src)) {
    throw new Error(`Missing markers <!-- ${name}:START --> / <!-- ${name}:END --> in ${targetPath}`);
  }
  return src.replace(re, replacement);
};

let next = replaceBlock(
  original,
  "PROJECTS",
  `<!-- PROJECTS:START -->\n${projectsBlock}\n<!-- PROJECTS:END -->`,
);
next = replaceBlock(
  next,
  "AOC",
  `<!-- AOC:START -->\n${aocBlock}\n<!-- AOC:END -->`,
);

if (next === original) {
  console.log(`No changes needed in ${targetPath}`);
  process.exit(0);
}

writeFileSync(targetPath, next);
console.log(`Updated ${targetPath}`);
