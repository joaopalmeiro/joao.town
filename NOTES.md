# Notes

- Astro:
  - https://astro-tips.dev/
  - https://github.com/withastro/astro/tree/main/examples
    - https://github.com/withastro/astro/tree/main/examples/minimal
    - https://github.com/withastro/astro/blob/main/examples/blog/src/components/BaseHead.astro
  - https://docs.astro.build/en/guides/data-fetching/
    - https://www.howtocode.io/posts/astro/working-with-data
  - https://docs.astro.build/en/basics/astro-components/#slots
  - https://docs.astro.build/en/reference/modules/astro-zod/
    - https://tillitsdone.com/blogs/zod-validation-in-astro-js/
    - https://astro-tips.dev/tips/leverage-zod-s-power/
    - https://zod.dev/basics
    - https://zod.dev/api
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address
  - "The <address> element can only be used to represent the contact information for its nearest <article> or <body> element ancestor."
  - https://cauldron.dequelabs.com/components/Address: "A utility component to identify contact information or a physical address."
- https://github.com/readme/guides/first-oss-contribution: "open source contribution"
- https://docs.gitlab.com/api/repository_files/
- https://docs.rancherdesktop.io/ui/preferences/application/general/#administrative-access: "(...) the socket is instead created at `~/.rd/docker.sock` and is accessible via the `rancher-desktop` Docker context."
- https://docs.rancherdesktop.io/faq/: "A: No, the special value host-gateway is specific to Docker Desktop and is not yet supported in Rancher Desktop. However, you can access services running on the host machine from within a container using host.docker.internal or host.rancher-desktop.internal without passing the --add-host flag."
- Playwright:
  - https://docs.astro.build/en/guides/testing/#playwright
  - https://playwright.dev/docs/docker#pull-the-image
  - https://playwright.dev/docs/docker#remote-connection
  - https://playwright.dev/docs/docker#build-your-own-image
  - https://playwright.dev/docs/intro
  - https://vitest.dev/guide/comparisons.html#playwright
  - https://playwright.dev/docs/test-snapshots
  - https://playwright.dev/docs/test-webserver#configuring-a-web-server
  - [[BUG] Unable to launch browser with channel "chrome" inside docker even installed chrome](https://github.com/microsoft/playwright/issues/17395) issue
    - "Same problem here when using docker on M1 Mac. I use colima to run docker instance, and the command `colima start colima-x86 --arch x86_64` solved my issue."
  - https://github.com/browserless/browserless
    - https://github.com/orgs/browserless/packages?repo_name=browserless
  - [[Bug]: process.platform, os.platform() usages in playwright resolve to host platform instead of remote browser platform](https://github.com/microsoft/playwright/issues/37647) issue
  - [[Bug]: snapshotPathTemplate hardcodes process.platform instead of using browser platform in filename](https://github.com/microsoft/playwright/issues/34956) issue
  - [[Playwright]: process.platform, os.platform() usages in playwright resolve to host platform instead of remote browser platform](https://github.com/Azure/azure-sdk-for-js/issues/35997) issue
  - https://playwright.dev/docs/api/class-testconfig#test-config-snapshot-path-template
  - https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang:
  - https://www.ietf.org/rfc/bcp/bcp47.txt
  - https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag
  - https://gist.github.com/JamieMason/3748498
- https://the0x00.dev/javascript/How-to-scramble-a-string-in-Javascript/
- https://futurestud.io/tutorials/how-to-shuffle-the-characters-of-a-string-in-javascript-or-node-js
- https://www.docuseal.com/blog/css-print-page-style
- https://issues.chromium.org/issues/40657181
  - https://issues.chromium.org/issues/41427382
- https://github.com/cllu/Semantic-Resume
  - `<section> <h2>Education</h2> <details> <summary> <span itemprop="alumniOf" itemscope itemtype="http://schema.org/EducationalOrganization"> <link href="https://www.cuhk.edu.hk/" itemprop="url"> <span itemprop="name">The Chinese University of Hong Kong</span>, <time>2011 - 2016</time> </summary> Research Area: Entity Retrieval, Natural Language Processing, Knowledge Graph. </details> </section>`
- https://michaelengen.com/posts/my-eleventy-resume/
  - `<main> <section> <h2>Experience</h2> <section> <!-- Much experience --> </section> <section> <!-- Wow --> </section> </section> <section> <h2>Education</h2> <section> <!-- University --> </section> <section> <!-- College, maybe --> </section> </section> </main>`
- https://stackoverflow.com/questions/7131204/html5-resume-semantics
  - `<section> <h2>Experience</h2> <dl> <dt>THE JOB TITLE</dt> <dd> <dl> <dt>Company:</dt><dd>THE COMPANY</dd> <dt>Period:</dt><dd> <time class="dtstart" datetime="2007-02-01">Feb 2007</time> - <time class="dtend" datetime="2009-09-30">Sep 2009</time>, </dd> <dt>Description:</dt><dd> DESCRIPTION </dd> </dl> </dd> <!-- more jobs here as dt-dd-pairs --> </dl> </section>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl
- https://github.com/maxboeck/resume
  - https://demo-resume.netlify.app/
  - https://mxb.dev/blog/eleventy-resume-builder/
- https://github.com/alexcalaca/semantic_html_cv/blob/master/index.html
- https://gist.github.com/joshbuchea/a5b2d73e4c8e9560eb47a3c366be0da3
- https://registry.jsonresume.org/thomasdavis?theme=academic-cv-lite
- https://tailwindcss.com/plus/templates/spotlight/preview
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header
- https://bati-itao.github.io/learning/esdc-self-paced-web-accessibility-course/module2/lists.html#description-list
- https://www.sarasoueidan.com/
- https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
- https://bost.ocks.org/mike/shuffle/
- [tsdown](https://tsdown.dev/) starter templates:
  - https://github.com/rolldown/tsdown/blob/v0.20.1/packages/create-tsdown/src/index.ts#L15
  - https://github.com/sxzz/tsdown-templates
- https://docs.astro.build/en/guides/styling/#tailwind
- https://tailwindcss.com/docs/installation/framework-guides/astro
- https://github.com/tailwindlabs/tailwindcss/blob/v4.2.0/packages/tailwindcss/preflight.css
- Fonts:
  - https://somepx.itch.io/
    - https://somepx.itch.io/pixel-font-gecko
    - https://somepx.itch.io/pixel-font-saga
    - https://somepx.itch.io/pixel-font-empire
  - https://vercel.com/font
    - https://vercel.com/font?type=pixel (Geist Pixel Square)
- https://cv.jarocki.me/
  - `<div class="text-sm tabular-nums text-gray-500" aria-label="Employment period: 2010 to 2012">2010 - 2012</div>`
- https://pdfa.org/chrome-plated-pdfs-exploring-google-chromes-new-pdf-capabilities/
- https://check.axes4.com/en/
- https://typst.app/blog/2025/accessible-pdf/
  - https://typst.app/docs/guides/accessibility/#testing-for-accessibility
  - https://github.com/verapdf
    - https://docs.verapdf.org/cli/
    - https://docs.verapdf.org/cli/validation/
    - https://formulae.brew.sh/formula/verapdf
- https://piccalil.li/blog/a-guide-to-creating-accessible-pdfs-using-free-tools/
- `<h2>More about me</h2>`, `<h2>Full CV and projects</h2>`
- https://docs.rendercv.com/user_guide/yaml_input_structure/cv/: `highlights`
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl#metadata: "Description lists are useful for displaying metadata as a list of key-value pairs."
- https://tailwindcss.com/plus/ui-blocks/application-ui/data-display/description-lists
- https://en.pronouns.page/he
- https://schema.org/
- https://a11y-guidelines.orange.com/en/web/develop/common-navigation/#warn-the-user-when-opening-a-new-window
- https://theadminbar.com/accessibility-weekly/opening-links-in-new-tabs-or-not/: `<a href="<https://www.facebook.com/groups/wordpress.accessibility>" class="primary-button" target="_blank" rel="noopener">Join the Community <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="screen-reader-text"> opens a new window</span></a>`
- https://tailwindcss.com/docs/display#screen-reader-only
- https://www.sarasoueidan.com/blog/horizontal-rules/:
  - "use `aria-hidden="true"` to hide decorational horizontal lines."
  - https://www.stefanjudis.com/today-i-learned/the-hr-element-is-more-than-a-horizontal-line/
- https://en.wikipedia.org/wiki/Time_in_Portugal
- https://developers.google.com/search/docs/advanced/robots/create-robots-txt
  - https://github.com/google/robotstxt
  - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- https://securitytxt.org/
  - https://www.rfc-editor.org/rfc/rfc9116#section-2.5.8
- [chore: speed up pre-commit hooks](https://github.com/npmx-dev/npmx.dev/pull/1661/changes)
  - `"./node_modules/.bin/oxlint --fix"` instead of `"pnpm oxlint --fix"`, for example
  - https://github.com/lunariajs/lunaria
- [oxfmt: bundle prettier-plugin-svelte and prettier-plugin-astro](https://github.com/oxc-project/oxc/issues/19715) issue
- https://fonts.google.com/specimen/VT323
- Typewriter-style fonts:
  - https://www.dafont.com/theme.php?cat=113
  - https://typetype.org/blog/typewriter-fonts-from-retro-mechanics-to-digital-classics/
  - https://fonts.google.com/specimen/Special+Elite
    - https://www.npmjs.com/package/@fontsource/special-elite
  - https://github.com/ctrlcctrlv/TT2020
  - https://fonts.adobe.com/discovery/typewriter-fonts
    - https://fonts.adobe.com/fonts/chandler-42
      - https://mehallo.com/blog/
      - https://www.myfonts.com/collections/chandler-42-font-steve-mehallo
    - https://fonts.adobe.com/fonts/p22-typewriter
- https://github.com/orhun/daktilo
- https://github.com/vaughantype/wumpus-mono
- Using custom fonts:
  - https://docs.astro.build/en/guides/fonts/#using-fontsource
  - https://fontsource.org/docs/getting-started/preload
  - https://fontsource.org/fonts/special-elite/install
  - https://web.dev/articles/preload-critical-assets#how_to_implement_relpreload
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload
  - https://tailwindcss.com/docs/font-family#customizing-your-theme
- `<h2 class="font-medium">Profile</h2>`
- `<hr aria-hidden="true" class="border-dashed" />`
- `<p aria-hidden="true">---</p>`
- https://stackoverflow.com/questions/614619/how-to-find-out-which-fonts-are-referenced-and-which-are-embedded-in-a-pdf-docum
- https://tailwindcss.com/docs/letter-spacing
- Kaomoji:
  - https://en.wikipedia.org/wiki/Kaomoji
  - https://kaomoji.you/en/
  - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role#using_roleimg_to_confer_meaning_that_is_obscured_or_implied: `<div role="img" aria-label="Table flip"> <p>(╯°□°）╯︵ ┻━┻</p> </div>`
  - `<span class="kaomoji" role="img" aria-label="happy Kirby">&lt;( ^.^ )&gt;</span>` + `.kaomoji { white-space: nowrap; font-family: monospace; }`
- WEBCAT:
  - https://github.com/freedomofpress/webcat
  - https://webcat.tech/
  - https://docs.webcat.tech/site-operators/manual.html
  - https://docs.webcat.tech/developers/CSP.html
  - https://docs.webcat.tech/developers/examples.html
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- https://github.com/tailwindlabs/tailwindcss/pull/13395
- https://tailwindcss.com/docs/max-width#responsive-design
- https://v3.tailwindcss.com/docs/max-width#reading-width
- `px-4 py-12 print:px-16`
- https://github.com/Kludex/cassetter
- https://github.com/needle-tools/md-browse
- https://github.com/blackboardsh/electrobun
- https://frontendmasters.com/blog/what-is-safe-alignment-in-css/
- https://oxc.rs/docs/guide/usage/formatter/sorting.html#sort-tailwind-css-classes
- https://t4stack.com/
  - https://github.com/timothymiller/t4-app
  - https://github.com/gvergnaud/ts-pattern
- https://github.com/aidenybai/react-scan
- https://github.com/DioxusLabs/dioxus
- `<h2 class="text-lg tracking-wide">Profile</h2>`
- `<dd>Lisbon, Portugal (UTC+00:00 or UTC+01:00)</dd>`
- https://tailwindcss.com/docs/text-indent
- https://ui.shadcn.com/docs/components/radix/data-table
- https://typecast.munk.org/2014/12/31/corona-portables-updated-at-the-typewriter-database/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::selection#accessibility
- `<dt class="after:content-[attr(data-after)]" data-after="&colon;&nbsp;">Pronouns</dt>`
- https://docs.astro.build/en/editor-setup/#prettier
- `~>`, `->`, `<->`
- `<li class="indent-4">`
- `<body class="px-6 py-12 text-base text-gray-900 selection:bg-gray-900 selection:text-white print:p-0 print:text-sm">`
- https://docs.astro.build/en/guides/deploy/cloudflare/#cloudflare-workers
  - https://docs.astro.build/en/guides/integrations-guide/cloudflare/: "If you're using Astro as a static site builder, you don't need an adapter."
  - https://developers.cloudflare.com/workers/wrangler/configuration/
  - "- Expected "name" to be of type string, alphanumeric and lowercase with dashes only but got "joao.town"."
- .town:
  - https://icannwiki.org/.town
  - https://icannwiki.org/Identity_Digital
  - https://www.identity.digital/
- https://www.namecheap.com/support/knowledgebase/article.aspx/9717/2232/what-is-dnssec/
- https://openpencil.dev/
  - https://github.com/open-pencil/open-pencil
  - https://github.com/ZSeven-W/openpencil
    - https://github.com/ZSeven-W/openpencil/issues/20
  - `brew install open-pencil/tap/open-pencil`
  - https://github.com/open-pencil/open-pencil/releases
  - https://openpencil.dev/user-guide/
  - https://app.openpencil.dev/
- https://arcade.pirillo.com/fontcrafter.html
- https://polypane.app/
- https://github.com/responsively-org/responsively-app
  - https://responsively.app/
  - `brew install --cask responsively`
  - https://responsively.app/sponsor
- https://www.youtube.com/watch?v=HD5TWE8xD7o
  - https://github.com/cyxzdev/Uncodixfy
  - https://developers.openai.com/api/docs/guides/prompt-guidance
  - https://openai.com/index/introducing-gpt-5-4/:
    - "In the API, GPT‑5.4 is priced higher per token than GPT‑5.2 to reflect its improved capabilities, while its greater token efficiency helps reduce the total number of tokens required for many tasks."
    - "It supports up to 1M tokens of context (...)"
    - https://github.com/openai/skills/tree/main/skills/.curated/spreadsheet
    - https://chatgpt.com/apps/spreadsheets/: "ChatGPT for Excel"
    - "We're also improving visual understanding for dense, high-resolution images where full fidelity matters. Starting with GPT‑5.4, we're introducing an original image input detail⁠(opens in a new window) level which supports full-fidelity perception up to 10.24M total pixels or 6000-pixel maximum dimension, whichever is lower;"
    - `<a href="https://developers.openai.com/api/docs/guides/images-vision/#specify-image-input-detail-level"><span>input detail</span>⁠<span class="sr-only">(opens in a new window)</span></a>`
    - https://github.com/openai/skills/tree/main/skills/.curated/playwright-interactive
  - https://github.com/T3-Content/skatebench
    - https://skatebench.t3.gg/
  - https://developers.openai.com/api/docs/models/gpt-5.4: "For models with a 1.05M context window (GPT-5.4 and GPT-5.4 pro), prompts with >272K input tokens are priced at 2x input and 1.5x output for the full session for standard, batch, and flex."
  - https://labs.scale.com/leaderboard/swe_bench_pro_public
  - https://developers.openai.com/api/docs/guides/tools-computer-use/#option-3-use-a-code-execution-harness
    - https://github.com/asweigart/pyautogui
  - https://stockfishchess.org/
- https://github.com/m5stack/uiflow-micropython
  - https://shop.m5stack.com/products/m5stack-esp32-core-ink-development-kit1-54-elnk-display
  - https://mauser.pt/096-9311/m5stack-coreink-modulo-ecra-e-ink-1-54-para-m5stack
  - https://github.com/m5stack
- ZADU: A Python Library for Evaluating the Reliability of Dimensionality Reduction Embeddings
  - https://arxiv.org/abs/2308.00282
  - https://github.com/hj-n/zadu
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/table-layout
  - "`auto`: The automatic table layout algorithm is used. The widths of the table and its cells are adjusted to fit the content. Most browsers use this algorithm by default."
  - "`fixed`: The fixed table layout algorithm is used. When using this keyword, the table's width _needs_ to be specified explicitly using the `width` property. If the value of the `width` property is set to `auto` or is not specified, the browser uses the automatic table layout algorithm, in which case the `fixed` value has no effect."
- https://catalyst.tailwindui.com/docs/table#responsive-tables
- `<table class="table-fixed w-full">`
- https://daisyui.com/components/table/
- https://www.hyperui.dev/components/application/tables
  - `<th class="px-3 py-2 whitespace-nowrap">Name</th>`
- From "tools and features" to "interfaces and tools"
- https://github.com/peters/horizon: "(...) GPU-accelerated terminal board that puts all your sessions on an infinite canvas."
- https://unsloth.ai/docs/new/studio
- https://a11y.ing/en/demo/other/pseudo-elements-before-and-after/
  - https://benmyers.dev/blog/css-can-influence-screenreaders/
    - "For `:after` pseudo elements, User agents MUST append CSS textual content, without a space, to the textual content of the current node."
    - `.your-link::after { content: " ~>" / ""; }`
- https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts
- WAVE:
  - https://wave.webaim.org/extension/
  - https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh
- https://docs.astro.build/en/guides/content-collections/#build-time-collection-loaders
  - "To fetch remote data at build time, you can build a custom loader to retrieve your data and update the data store."
  - https://docs.astro.build/en/guides/content-collections/#custom-build-time-loaders
  - https://docs.astro.build/en/reference/content-loader-reference/#loader-example
  - https://docs.astro.build/en/reference/content-loader-reference/#defining-a-loader-as-a-function: `// Must return an array of entries with an id property or an object with IDs as keys and entries as values`
- From `print:p-24` to `print:p-16` or `print:p-20`
- Add `text-wrap: balance;` to `<body>` or Profile section?
- Favicon:
  - https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
    - https://en.wikipedia.org/wiki/ICO_(file_format)#ICONDIR_structure
    - https://evilmartians.com/apple-touch-icon.png
  - https://caniuse.com/link-icon-svg
    - https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7
    - https://realfavicongenerator.net/
  - https://web.dev/articles/building/an-adaptive-favicon
    - `<link rel="icon" href="/favicon.ico" sizes="any">`
    - `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`
    - https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/
      - https://jakearchibald.com/2016/svg-media-queries/
  - https://favicon.io/favicon-checker/
  - https://github.com/waysidemapping/pinhead
    - https://pinhead.ink/
      - Current: `pixel_house_with_chimney` (https://github.com/waysidemapping/pinhead/blob/e12eb3ef54e00f414057f0f39a8c40846077145c/icons/pixel_style/buildings/pixel_house_with_chimney.svg)
      - `at_sign`, `golf_green`, `parking_p`, `pixel_ghost`, `pixel_invader`
  - https://pawelgrzybek.com/svg-favicons-that-respect-theme-preference/
- https://github.com/filipsobol/sonda
  - https://sonda.dev/bundlers/vite
  - https://sonda.dev/frameworks/astro.html
    - "By default, Astro does not ship any JavaScript to the client, so the default configuration may not generate a report. In this case, you may need to generate a report for the server bundle, as described below."
- https://github.com/cloudflare/workers-sdk/blob/main/packages/wrangler/CHANGELOG.md
  - https://docs.astro.build/en/guides/upgrade-to/v6/
  - https://docs.astro.build/en/guides/integrations-guide/cloudflare/#upgrading-to-v13-and-astro-6
    - "If you're using Astro as a static site builder, you don't need an adapter."
- https://llmstxt.org/
  - https://www.firecrawl.dev/blog/How-to-Create-an-llms-txt-File-for-Any-Website
  - https://www.mintlify.com/docs/ai/markdown-export
  - https://www.mintlify.com/docs/ai/llmstxt
  - https://github.com/gxjansen/astro-md-alternate
    - `<link rel="alternate" type="text/markdown">`
    - https://www.gilesthomas.com/2025/03/llmstxt
    - https://dri.es/the-third-audience
  - https://llmstxt.org/llms.txt: `- [llms.txt proposal](https://llmstxt.org/index.md): The proposal for llms.txt`
  - https://llmstxthub.com/personal
    - https://www.hilary-olson.com/llms.txt
    - https://www.hilary-olson.com/llms-full.txt
    - https://aureliobenedi.com/llms.txt
- https://en.wikipedia.org/wiki/Canonical_link_element
  - https://docs.astro.build/en/reference/configuration-reference/#site
- https://developers.cloudflare.com/pages/configuration/headers/
- https://developers.cloudflare.com/workers/static-assets/headers/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
  - `Content-Type: text/html; charset=utf-8`
  - https://developers.cloudflare.com/pages/configuration/headers/index.md: `text/markdown; charset=utf-8`
- No table caption:
  - https://lists.w3.org/Archives/Public/w3c-wai-ig/2019AprJun/0010.html
  - https://a11y-guidelines.orange.com/en/articles/accessible-table/: `<caption class="visually-hidden position-relative">Summary by level</caption>`
- https://www.novajs.dev/react-hook-download
  - https://github.com/novajslabs/nova.js
- https://infrequently.org/links/#tools
- https://wesbos.com/uses
  - https://github.com/wesbos/awesome-uses
  - https://uses.tech/
- https://www.railly.dev/uses
  - https://github.com/Railly/one-hunter-vscode
  - https://www.tryelements.dev/: "Elements gives you production-ready auth, payments, AI and more... built for Next.js, TypeScript, and the agentic era."
- `<a href="https://arxiv.org/abs/2510.06071" class="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">` or `class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"`
- https://docs.joinmastodon.org/user/profile/#verification
- https://github.com/unjs/mdbox
  - https://www.npmjs.com/package/md4w
- https://github.com/github/dmca
- https://www.generativefonts.xyz/fonts/
  - https://github.com/NaN-xyz/Glyph-Filters
- https://sentry.io/cookbook/monitor-opencode-with-sentry/
- https://jaredcunha.com/ai-usage
- "The outcome is sufficient and satisfactory."

## Commands

```bash
npm create astro@latest -- --help
```

```bash
npx playwright install chromium --with-deps
```

```bash
verapdf João\ Palmeiro.pdf --format html
```

```bash
pdffonts João\ Palmeiro.pdf
```

```bash
npm install -D "@types/node@$(cat .nvmrc | cut -d . -f 1)"
```

### Rancher Desktop

```bash
docker context ls
```

```bash
docker context show
```

```bash
docker pull mcr.microsoft.com/playwright:v1.57.0-noble
```

## Snippets

```html
<body class="mx-auto flex max-w-prose flex-col gap-8 py-12 text-gray-900 selection:bg-gray-900 selection:text-white">
  <slot />
</body>
```

```html
<footer><p class="font-mono text-sm text-gray-400 selection:text-[#00ff00]!">{id}</p></footer>
```

```ts
import { shuffle as d3Shuffle } from "d3-array";

export function shuffle(str: string): string {
  return d3Shuffle(str.split("")).join("");
}

const id = `OS_${shuffle("JOÃOPALMEIRO")}_${new Date().toISOString().slice(0, 10).replaceAll("-", "")}`;
```

```html
<ul>
  <li>
    <a
      href="https://arxiv.org/abs/2510.06071"
      class="before:content-[attr(data-before)] after:content-[attr(data-after)]"
      data-after=" ~>"
      data-before="\\ "
      >Benchmark It Yourself (BIY): Preparing a Dataset and Benchmarking AI Models for Scatterplot-Related Tasks</a
    >
  </li>
  <li>
    <a
      href="https://medium.com/feedzaitech/here-and-now-reusing-code-at-feedzai-with-jupyterlab-snippets-ff3b8d880e50"
      class="before:content-[attr(data-before)] after:content-[attr(data-after)]"
      data-after=" ~>"
      data-before="/ "
      >Here and Now: Reusing Code at Feedzai with JupyterLab Snippets
    </a>
  </li>
</ul>
```

```html
<header class="flex flex-wrap">
  <h3>
    <span aria-hidden="true">~~ </span>Full-Stack Developer at Jungle<span aria-hidden="true" class="whitespace-pre">
      {" "}/{" "}
    </span>
  </h3>
  <p><time datetime="2023-01">Jan 2023</time> - <time datetime="2024-04">Apr 2024</time></p>
</header>
```

- https://www.hyperui.dev/components/application/tables

```html
<div class="overflow-x-auto rounded border border-gray-300 shadow-sm">
  <table class="min-w-full divide-y-2 divide-gray-200">
    <thead class="ltr:text-left rtl:text-right">
      <tr class="*:font-medium *:text-gray-900">
        <th class="px-3 py-2 whitespace-nowrap">Name</th>
        <th class="px-3 py-2 whitespace-nowrap">DoB</th>
        <th class="px-3 py-2 whitespace-nowrap">Role</th>
        <th class="px-3 py-2 whitespace-nowrap">Salary</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr class="*:text-gray-900 *:first:font-medium">
        <td class="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
        <td class="px-3 py-2 whitespace-nowrap">04/06/1262</td>
        <td class="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
        <td class="px-3 py-2 whitespace-nowrap">$0</td>
      </tr>

      <tr class="*:text-gray-900 *:first:font-medium">
        <td class="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
        <td class="px-3 py-2 whitespace-nowrap">19/10/1678</td>
        <td class="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
        <td class="px-3 py-2 whitespace-nowrap">$0</td>
      </tr>

      <tr class="*:text-gray-900 *:first:font-medium">
        <td class="px-3 py-2 whitespace-nowrap">Nadja</td>
        <td class="px-3 py-2 whitespace-nowrap">15/03/1593</td>
        <td class="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
        <td class="px-3 py-2 whitespace-nowrap">$0</td>
      </tr>

      <tr class="*:text-gray-900 *:first:font-medium">
        <td class="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
        <td class="px-3 py-2 whitespace-nowrap">01/09/1971</td>
        <td class="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
        <td class="px-3 py-2 whitespace-nowrap">$53,000</td>
      </tr>

      <tr class="*:text-gray-900 *:first:font-medium">
        <td class="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
        <td class="px-3 py-2 whitespace-nowrap">18/11/1991</td>
        <td class="px-3 py-2 whitespace-nowrap">Familiar/Vampire Hunter</td>
        <td class="px-3 py-2 whitespace-nowrap">$0</td>
      </tr>
    </tbody>
  </table>
</div>
```

```html
<a href="https://arxiv.org/abs/2204.14025" class="after:content-[attr(data-after)]" data-after=" ~>"
  >Data+Shift: Supporting visual investigation of data distribution shifts by data scientists
</a>
```
