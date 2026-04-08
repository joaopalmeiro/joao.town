import { render } from "takumi-js";
import { join } from "node:path";
import { writeFile } from "node:fs/promises";

async function main(): Promise<void> {
  const html = /* html */ `
    <div tw="w-full h-full flex flex-col items-center justify-center bg-white">
      <span tw="font-normal"><( ^.^ )></span>

      <h1 tw="font-normal">João Palmeiro</h1>

      <p tw="font-normal">Data Visualization Engineer @ Feedzai</p>
    </div>
`;

  const output = join(import.meta.dirname, "og-image.png");
  const devicePixelRatio = 2.0;

  const image = await render(html, {
    width: 1200 * devicePixelRatio,
    height: 630 * devicePixelRatio,
    format: "png",
    devicePixelRatio,
  });

  await writeFile(output, image);
}

main();
