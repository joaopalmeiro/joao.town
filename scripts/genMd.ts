import { Data } from "../src/models.ts";

async function main(): Promise<void> {
  const repo = encodeURIComponent("joaommpalmeiro/os-contribs");
  const filePath = encodeURIComponent("data/contribs.json");
  const ref = "main";
  const url = `https://gitlab.com/api/v4/projects/${repo}/repository/files/${filePath}/raw?ref=${ref}`;

  const response = await fetch(url);
  const rawData = await response.json();
  const data = Data.parse(rawData);

  // TODO
  console.log(data);
}

main();
