import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { Data } from "../src/models.ts";

async function updateContribs(count: number): Promise<void> {
  const file = join(import.meta.dirname, "..", "public", "index.md");
  const content = await readFile(file, "utf-8");

  const updated = content.replace(/\[\d+ open source contributions\]/, `[${count} open source contributions]`);

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

  // TODO
  await updateContribs(data.length);
}

main();
