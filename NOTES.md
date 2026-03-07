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

```ts
export function shuffle(str: string): string {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}
```

```html
<section>
  <h2>More about me</h2>
  <ul>
    <li>
      <a href="https://www.linkedin.com/in/joaopalmeiro/" target="_blank">
        LinkedIn (joaopalmeiro)
      </a>
    </li>
    <li>
      <a href="https://huggingface.co/joaompalmeiro" target="_blank">
        Hugging Face (joaompalmeiro)
      </a>
    </li>
  </ul>
</section>
```

```html
<article>
  <header>
    <h3>Assistant Consultant at everis (NTT DATA)</h3>
    <p>
      <time datetime="2018-07">Jul 2018</time> -
      <time datetime="2018-09">Sep 2018</time>
    </p>
  </header>
</article>
```

### Kimi K2 (0905)

```astro
---
import Layout from "../layouts/Base.astro";
import { shuffle } from "../utils";

const id = `OS_${shuffle("JOÃO_PALMEIRO")}`;
---

<Layout
  title="João Palmeiro"
  description="My personal website."
>
  <!-- 1. Let keyboard users jump straight to the main content -->
  <a class="skip-link" href="#main">Skip to main content</a>

  <!-- 2. Banner landmark -->
  <header class="page-header">
    <h1 lang="pt-PT">João Palmeiro</h1>

    <!-- These are related pieces of metadata - a DL keeps them associated -->
    <dl class="meta">
      <dt class="visually-hidden">Pronouns</dt>
      <dd>he/him</dd>

      <dt class="visually-hidden">Location</dt>
      <dd>Lisbon, Portugal (UTC+00:00)</dd>
    </dl>

    <address>
      <a href="mailto:joaopalmeiro@proton.me">joaopalmeiro@proton.me</a>
    </address>
  </header>

  <!-- 3. Main landmark with an ID for the skip link -->
  <main id="main">
    <!-- Profile section -->
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading">Profile</h2>
      <p>TODO</p>
    </section>

    <!-- Experience section -->
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>

      <!-- Each job is a SECTION, not an ARTICLE, because it is not
           a self-contained syndicatable story. -->
      <section class="job">
        <h3>Data Visualization Engineer at Feedzai</h3>
        <p><time datetime="TODO">TODO</time> - present</p>

        <h4>Public highlights</h4>
        <ul>
          <li>
            Benchmark It Yourself (BIY): Preparing a Dataset and Benchmarking
            AI Models for Scatterplot-Related Tasks
          </li>
          <li>
            Here and Now: Reusing Code at Feedzai with JupyterLab Snippets
          </li>
        </ul>
      </section>

      <section class="job">
        <h3>Full-Stack Developer at Jungle</h3>
        <p>
          <time datetime="TODO">TODO</time> -
          <time datetime="TODO">TODO</time>
        </p>
      </section>

      <section class="job">
        <h3>Data Visualization Engineer at Feedzai</h3>
        <p>
          <time datetime="TODO">TODO</time> -
          <time datetime="TODO">TODO</time>
        </p>
      </section>

      <section class="job">
        <h3>Research Intern at Feedzai</h3>
        <p>
          <time datetime="TODO">TODO</time> -
          <time datetime="TODO">TODO</time>
        </p>
      </section>

      <section class="job">
        <h3>Engineering Intern at Feedzai</h3>
        <p>
          <time datetime="TODO">TODO</time> -
          <time datetime="TODO">TODO</time>
        </p>
      </section>

      <section class="job">
        <h3>Assistant Consultant at everis (NTT DATA)</h3>
        <p>
          <time datetime="TODO">TODO</time> -
          <time datetime="TODO">TODO</time>
        </p>
      </section>
    </section>
  </main>

  <!-- 4. Content-info landmark -->
  <footer>
    <h2>More about me</h2>

    <dl>
      <dt>Full CV</dt>
      <dd>
        <a href="https://www.linkedin.com/in/joaopalmeiro/">
          LinkedIn (joaopalmeiro)
        </a>
      </dd>
      <dd><a href="/contribs">Open source contributions</a></dd>

      <dt>Projects</dt>
      <dd><a href="TODO">GitHub (TODO)</a></dd>
      <dd><a href="TODO">GitLab (TODO)</a></dd>
      <dd><a href="TODO">Codeberg (TODO)</a></dd>
      <dd>
        <a href="https://huggingface.co/joaompalmeiro">
          Hugging Face (joaompalmeiro)
        </a>
      </dd>
    </dl>

    <!-- ARIA label keeps the ID meaningful only for developers -->
    <p aria-label="Page identifier">{id}</p>
  </footer>
</Layout>
```

### Kimi K2.5

```astro
---
import Layout from "../layouts/Base.astro";
import { shuffle } from "../utils";

const id = `OS_${shuffle("JOÃO_PALMEIRO")}`;
const currentYear = new Date().getFullYear();
---

<Layout title="João Palmeiro" description="My personal website.">
  <!-- Skip link for keyboard navigation -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header>
    <!-- Add aria-label to distinguish from other headers -->
    <h1 lang="pt-PT">João Palmeiro</h1>

    <!-- Use aria-label for pronunciation hint -->
    <p aria-label="Pronouns: he, him">he/him</p>

    <p>
      <span aria-label="Location">Lisbon, Portugal</span>
      <time datetime="+00:00">(UTC+00:00)</time>
    </p>

    <address>
      <a href="mailto:joaopalmeiro@proton.me">joaopalmeiro@proton.me</a>
    </address>
  </header>

  <!-- Landmark with explicit label and skip target -->
  <main id="main-content" aria-label="Resume content">

    <!-- Use section instead of article for thematic grouping -->
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading">Profile</h2>
      <p>TODO</p>
    </section>

    <!-- Experience as section, individual jobs as articles -->
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>

      <!-- Each job is an independent article -->
      <article aria-labelledby="job-1-heading">
        <header>
          <h3 id="job-1-heading">
            <span class="visually-hidden">Current position: </span>
            Data Visualization Engineer at Feedzai
          </span>
          </h3>
          <!-- Use present tense for current job -->
          <p>
            <time datetime="TODO">TODO</time> - present
          </p>
        </header>

        <section aria-labelledby="highlights-heading">
          <h4 id="highlights-heading">Public highlights</h4>
          <ul>
            <li>
              Benchmark It Yourself (BIY): Preparing a Dataset and Benchmarking
              AI Models for Scatterplot-Related Tasks
            </li>
            <li>
              Here and Now: Reusing Code at Feedzai with JupyterLab Snippets
            </li>
          </ul>
        </section>
      </article>

      <!-- Add aria-labelledby to remaining articles -->
      <article aria-labelledby="job-2-heading">
        <header>
          <h3 id="job-2-heading">Full-Stack Developer at Jungle</h3>
          <p>
            <time datetime="TODO">TODO</time> - <time datetime="TODO">TODO</time>
          </p>
        </header>
      </article>

      <!-- Remaining job entries... -->

    </section>
  </main>

  <footer>
    <!-- Use nav for link collections -->
    <nav aria-labelledby="more-heading">
      <h2 id="more-heading">More about me</h2>

      <!-- Split dl into logical groups -->
      <section aria-labelledby="cv-heading">
        <h3 id="cv-heading" class="visually-hidden">Curriculum Vitae</h3>
        <dl>
          <dt>Full CV</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/joaopalmeiro/"
              aria-describedby="cv-heading"
            >
              LinkedIn (joaopalmeiro)
            </a>
          </dd>
          <dd>
            <a href="/contribs">Open source contributions</a>
          </dd>
        </dl>
      </section>

      <section aria-labelledby="projects-heading">
        <h3 id="projects-heading" class="visually-hidden">Projects</h3>
        <dl>
          <dt>Projects</dt>
          <dd>
            <a href="TODO" aria-label="GitHub profile (opens in new tab)" target="_blank" rel="noopener noreferrer">
              GitHub (TODO)
            </a>
          </dd>
          <dd>
            <a href="TODO" aria-label="GitLab profile (opens in new tab)" target="_blank" rel="noopener noreferrer">
              GitLab (TODO)
            </dd>
          <dd>
            <a href="TODO" aria-label="Codeberg profile (opens in new tab)" target="_blank" rel="noopener noreferrer">
              Codeberg (TODO)
            </a>
          </dd>
          <dd>
            <a
              href="https://huggingface.co/joaompalmeiro"
              aria-label="Hugging Face profile (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hugging Face (joaompalmeiro)
            </a>
          </dd>
        </dl>
      </section>
    </nav>

    <!-- Make ID less cryptic or add explanation -->
    <p aria-label="Page identifier">{id}</p>

    <!-- Add copyright -->
    <p>© <time>{currentYear}</time> João Palmeiro</p>
  </footer>
</Layout>
```
