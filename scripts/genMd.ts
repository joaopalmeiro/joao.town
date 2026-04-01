import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { md } from "mdbox";
import { format } from "prettier";

import { Data } from "../src/models.ts";

async function updateContribs(totalContribs: number): Promise<void> {
  const file = join(import.meta.dirname, "..", "public", "index.md");
  const content = await readFile(file, "utf-8");

  const updated = content.replace(/\[\d+ open source contributions\]/, `[${totalContribs} open source contributions]`);

  await writeFile(file, updated, "utf-8");
}

async function main(): Promise<void> {
  const repo = encodeURIComponent("joaommpalmeiro/os-contribs");
  const filePath = encodeURIComponent("data/contribs.json");
  const ref = "main";
  const url = `https://gitlab.com/api/v4/projects/${repo}/repository/files/${filePath}/raw?ref=${ref}`;

  const response = await fetch(url);
  const rawData = await response.json();
  const data = Data.parse(rawData);

  const totalContribs = data.length;
  const totalProjects = new Set(data.map((datum) => datum.repo)).size;

  // https://github.com/unjs/mdbox/blob/v0.1.1/src/render.ts#L25
  const title = md.heading("Open source contributions", 1).trim();

  const metrics = md.list([`Total: ${totalContribs}`, `Projects: ${totalProjects}`]);

  const table = md.table({
    columns: ["Repo", "MR/PR", "Year"],
    rows: data.map((datum) => {
      return [
        md.link(datum.url, datum.repo),
        md.link(datum.mr_pr, datum.title),
        datum.merged_at.getUTCFullYear().toString(),
      ];
    }),
  });

  const file = join(import.meta.dirname, "..", "public", "contribs.md");
  const content = await format([title, metrics, table].join("\n\n"), { parser: "markdown" });

  await Promise.all([updateContribs(totalContribs), writeFile(file, content, "utf-8")]);
}

main();
