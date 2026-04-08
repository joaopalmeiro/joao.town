import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { render } from "takumi-js";

async function main(): Promise<void> {
  const font = await readFile(
    new URL(import.meta.resolve("@fontsource/special-elite/files/special-elite-latin-400-normal.woff2")),
  );

  // pb-14 = mb-12 + mt-2
  const html = /* html */ `
    <div tw="w-full h-full flex flex-col items-center justify-center bg-white text-gray-900 pb-14 rotate-2">
      <span tw="text-6xl mb-12"><( ^.^ )></span>

      <h1 tw="font-normal my-0 text-8xl">~ João Palmeiro</h1>

      <p tw="mt-2 mb-0 text-4xl">Data Visualization Engineer @ Feedzai</p>
    </div>
`;

  const output = join(import.meta.dirname, "og-image.png");
  const devicePixelRatio = 2.0;

  const image = await render(html, {
    width: 1200 * devicePixelRatio,
    height: 630 * devicePixelRatio,
    format: "png",
    devicePixelRatio,
    loadDefaultFonts: false,
    fonts: [
      {
        name: "Special Elite",
        data: font,
        style: "normal",
      },
    ],
  });

  await writeFile(output, image);
}

main();
