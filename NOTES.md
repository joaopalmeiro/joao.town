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
  - "The `<address>` element can only be used to represent the contact information for its nearest `<article>` or `<body>` element ancestor."
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
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches
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
  - https://roe.dev/llms.txt:
    - `## Optional - [Full content](https://roe.dev/llms-full.txt): Complete bio, blog index, and talks in a single document`
  - https://www.fastht.ml/docs/llms.txt
  - https://www.mintlify.com/docs/llms.txt
  - https://www.mintlify.com/docs/llms-full.txt
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
- /ai:
  - https://jaredcunha.com/ai-usage
  - https://roe.dev/ai
  - https://www.bydamo.la/p/ai-manifesto
  - https://www.damolamorenikeji.com/ai/
  - https://slashai.page/
  - https://sive.rs/ai
  - https://macarthur.me/ai/
  - https://adrianroselli.com/2025/12/my-use-of-ai-on-this-site.html
- "The outcome is sufficient and satisfactory."
- https://ogp.me/
  - https://ogp.me/#no_vertical
- https://yossarian.net/til/post/backlinking-to-fediverse-accounts-with-meta-tags/
  - https://rknight.me/blog/setting-up-mastodon-author-tags/
  - https://rknight.me/blog/highlighting-journalism-with-the-fediverse-creator-tag/
  - https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
- https://air.dev/
  - "JetBrains Air is the Agentic Development Environment where Codex, Claude Agent, Gemini CLI, and Junie execute independent task loops without interfering with each other."
  - https://junie.jetbrains.com/
  - https://www.jetbrains.com/junie/
  - https://www.jetbrains.com/ai-ides/buy/?section=personal&billing=monthly
  - https://www.jetbrains.com/lp/mono/
- https://github.com/datalayer/jupyter-mcp-server
- https://piebald.ai/
- https://sunflowersuite.eu/: "(...) fully open-source, EU-hosted productivity suite (...)"
  - https://anytype.io/
  - https://github.com/anyproto/anytype-ts
  - https://download.anytype.io/
- https://sepiasearch.org/: "A search engine of PeerTube videos, channels and playlists"
- https://boneyard.vercel.app/overview
  - https://github.com/0xGF/boneyard
  - "Auto generated skeleton loading framework"
- https://roe.dev/uses
  - https://marketplace.visualstudio.com/items?itemName=Yummygum.city-lights-icon-vsc
  - https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme
- https://txt-llms.com/llms-full-txt
  - https://github.com/vercel-labs/academy-skills/blob/059204ccce05d68ae0d0d3c5213bc38c8d96497e/skills/agent-friendly-apis/references/llms-txt-spec.md
  - https://nextjs.org/docs/llms.txt
  - https://nextjs.org/docs/llms-full.txt
- https://buildwithfern.com/learn/docs/llms.txt
- https://gofastmcp.com/llms.txt
- https://gofastmcp.com/llms-full.txt
- https://blog.orhun.dev/800-rust-projects/
  - https://github.com/rvben/rumdl?tab=readme-ov-file#using-npm
  - https://rumdl.dev/rules/
  - https://rumdl.dev/usage/cli/#check-paths
  - [MD033 Inline HTML false positive](https://github.com/rvben/rumdl/issues/90) issue
- https://www.stefanjudis.com/today-i-learned/node-js-includes-a-native-glob-utility/
  - `const files = await Array.fromAsync(glob('**/*.txt'));`
- Knip:
  - https://knip.dev/overview/getting-started
  - https://knip.dev/reference/plugins/astro
  - https://knip.dev/reference/configuration#ignore
  - `"project": ["scripts/*.ts", "src/**/*.{ts,astro,css}", "tests/*.ts", "*.{mjs,ts}"]`
- https://polypane.app/blog/forced-colors-explained-a-practical-guide/
  - https://adrianroselli.com/2021/02/whcm-and-system-colors.html
  - https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/
- https://playwright.dev/docs/accessibility-testing
  - https://www.npmjs.com/package/@axe-core/playwright
- Vale:
  - https://docs.vale.sh/topics/.vale.ini
  - https://vale.sh/generator
  - https://docs.vale.sh/
  - https://docs.vale.sh/topics/cli
  - https://vale.sh/explorer
  - https://docs.vale.sh/topics/styles
  - https://github.com/fern-api/fern/blob/647b4e782e8d1059ed62c85409d65f13870e3f70/.vale.ini
  - https://github.com/fern-api/docs/blob/c8c3602f5939dc681adbdf915f459bf5d8c4a943/.vale.ini
  - https://docs.vale.sh/keys/stylespath
  - https://docs.vale.sh/keys/packages
  - https://knip.dev/reference/configuration#ignorebinaries
  - https://github.com/PostHog/posthog.com/blob/5fc31a5ae2ee0bb4814ca5005abf16b52334932f/.vale.ini
  - https://github.com/PostHog/posthog.com/blob/5fc31a5ae2ee0bb4814ca5005abf16b52334932f/.vale/styles/PostHogBase/Inclusivity.yml
- https://github.com/GoogleChrome/lighthouse
  - https://www.npmjs.com/package/lighthouse
  - https://github.com/catchpoint/WebPageTest
  - `--preset=desktop`
  - https://developer.chrome.com/docs/performance/insights/cls-culprit
    - https://developer.chrome.com/blog/font-fallbacks
      - "Arial is the recommended fallback font for sans-serif fonts and Times New Roman is the recommended fallback font for serif fonts. However, neither of these fonts is available on Android (Roboto is the only system font on Android)."
    - https://github.com/khempenius/font-fallbacks-dataset
    - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face#description: "If the `local()` function is provided, specifying a font name to look for on the user's device, and if the user agent finds a match, that local font is used."
    - https://github.com/unjs/fontaine
    - https://github.com/unjs/fontaine/tree/3c07e6ee4542c9ccde2be891b5fe06a4a1de0998/packages/fontless
    - https://github.com/seek-oss/capsize
    - https://dev.to/askrodney/astro-font-fallbacks-with-capsize-reduce-cls-197b
    - https://eatmon.co/blog/using-fontaine-with-astro
- https://web.dev/articles/codelab-preload-web-fonts
- https://chriswilliams.dev/blog/fallback-fonts-in-astro/
  - https://screenspan.net/fallback: "Fallback Font Generator"
- https://github.com/dequelabs/axe-core/blob/v4.11.1/doc/API.md#axe-core-tags
  - https://github.com/dequelabs/axe-core/blob/v4.11.1/doc/rule-descriptions.md#best-practices-rules
  - https://github.com/dequelabs/axe-core/blob/v4.11.1/doc/rule-descriptions.md#experimental-rules
- https://en.wikipedia.org/wiki/404
  - https://en.wikipedia.org/wiki/Peugeot_404
  - `<title>Page not found | Astro</title>`
  - `<meta name="description" content="Astro builds fast content sites, powerful web applications, dynamic server APIs, and everything in-between.">`
  - https://css-tricks.com/404-best-practices/
  - https://support.google.com/webmasters/thread/147440368/canonical-tag-404-pages?hl=en: "It doesn't matter in the slightest for Google, all content, including headers, are dropped when a 404 status code is seen. So no matter what you'd put in there, google wouldn't process and use it."
  - `Go to the homepage`
  - https://docs.astro.build/en/guides/deploy/cloudflare/#404-behavior
  - https://developers.cloudflare.com/workers/static-assets/#routing-behavior
- https://docs.astro.build/en/basics/astro-pages/#custom-404-error-page
- https://mass-driver.com/typefaces/md-io/
- https://www.404s.design/
- https://www.cult-ui.com/
  - https://github.com/nolly-studio/cult-ui
  - https://www.cult-ui.com/docs/components/neumorph-button
- https://web.dev/blog/viewport-units
- https://github.com/kane50613/takumi
  - https://www.npmjs.com/package/takumi-js
  - https://www.npmjs.com/package/@takumi-rs/core
  - https://github.com/kane50613/takumi/tree/master/takumi-napi-core
  - https://github.com/kane50613/takumi/blob/%40takumi-rs/core%401.0.0-rc.10/example/satori-html/index.ts
  - https://github.com/kane50613/takumi/blob/takumi-js%401.0.0-rc.10/takumi-js/src/render.ts
  - https://takumi.kane.tw/playground

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

```bash
vale sync
```

```bash
rm -rf .vale && vale sync
```

```bash
vale .
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

### `src/content.config.ts`

```ts
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

import { Datum } from "./models";

const contribs = defineCollection({
  loader: async () => {
    const repo = encodeURIComponent("joaommpalmeiro/os-contribs");
    const filePath = encodeURIComponent("data/contribs.json");
    const ref = "main";
    const url = `https://gitlab.com/api/v4/projects/${repo}/repository/files/${filePath}/raw?ref=${ref}`;

    const response = await fetch(url);
    const data: z.infer<typeof Datum>[] = await response.json();

    return data.map((item) => ({ id: item.mr_pr, ...item }));
  },
  schema: Datum,
});

export const collections = { contribs };
```
