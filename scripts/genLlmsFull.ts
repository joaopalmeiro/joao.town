import { glob, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const INPUT = join(import.meta.dirname, "..", "public");
const OUTPUT = join(INPUT, "llms-full.txt");

async function main(): Promise<void> {
  const files = (await Array.fromAsync(glob("*.md", { cwd: INPUT }))).sort((a, b) => a.localeCompare(b, "en"));

  const contents = await Promise.all(
    files.map(async (file) => {
      const content = await readFile(join(INPUT, file), "utf-8");
      return content.trim();
    }),
  );

  const llmsTxt = await readFile(join(INPUT, "llms.txt"), "utf-8");
  const intro = llmsTxt.slice(0, llmsTxt.indexOf("## Pages")).trim();

  const output = [intro, ...contents].join("\n\n---\n\n") + "\n";

  await writeFile(OUTPUT, output, "utf-8");
}

main();
