# Notes

- https://github.com/joaopalmeiro/template-astro
- https://gitlab.com/joaommpalmeiro/tailwind-recipes
- https://htmlandcssguidebook.com/html/html5-semantic/
- https://web.dev/learn/html/headings-and-sections#document_structure
- https://www.aleksandrhovhannisyan.com/blog/semantic-html-accessibility/
- https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#page_layouts
- https://www.a11yproject.com/posts/what-is-semantic-html/
- https://www.a11y-collective.com/blog/html-accessibility-programming-with-an-inclusive-perspective/
- https://design.sis.gov.uk/accessibility/coding/semantic-layout
- https://design.sis.gov.uk/accessibility/coding/document-structure
- https://luhr.co/blog/2023/09/12/all-about-accessible-headings/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#using_the_download_attribute_to_save_a_canvas_as_a_png
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
- Tailwind CSS:
  - https://tailwindcss.com/docs/guides/astro
  - https://docs.astro.build/en/guides/integrations-guide/tailwind/
  - https://github.com/withastro/astro/tree/main/packages/integrations/tailwind:
    - https://github.com/withastro/astro/blob/main/packages/integrations/tailwind/CHANGELOG.md
  - https://github.com/withastro/astro/tree/latest/examples/with-tailwindcss
  - https://github.com/nicdun/astro-tech-blog:
    - https://github.com/nicdun/astro-tech-blog/blob/main/src/layouts/Base.astro
    - https://github.com/nicdun/astro-tech-blog/blob/main/src/layouts/post.astro#L13: `<div class="mx-auto w-full max-w-screen-md">`
    - https://tailwindcss.com/blog/tailwindcss-v4-alpha
    - `npx astro add tailwind`
    - https://www.hyperui.dev/blog/how-to-write-better-containers-in-tailwindcss: `max-w-screen-xl mx-auto px-4` or `max-w-screen-md mx-auto px-4`
    - https://tailwindcss.com/docs/configuration#using-esm-or-type-script
    - https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280
- Fonts:
  - https://docs.astro.build/en/guides/fonts/#using-fontsource
  - https://docs.astro.build/en/guides/fonts/#register-fonts-in-tailwind
  - https://tailwindcss.com/docs/font-family#using-custom-values
  - https://caniuse.com/variable-fonts
  - https://fontsource.org/fonts/bricolage-grotesque/install
  - https://fontsource.org/fonts/work-sans/install
- https://github.com/tailwindlabs/tailwindcss/discussions/9024
- https://nodejs.org/api/esm.html#mandatory-file-extensions
- https://nodejs.org/api/cli.html
- https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
- https://github.com/joaopalmeiro/template-ts-jiti-script
- https://mariusschulz.com/blog/dynamic-import-expressions-in-typescript
- https://github.com/ttomczak3/Milky-Way/blob/v1.2.0/src/styles/global.css#L19: `body { max-width: 540px; margin: 0 auto; text-align: justify; }`
- https://astro-sphere-demo.vercel.app/:
  - https://github.com/markhorn-dev/astro-sphere/blob/v1.0.1/src/components/Container.astro
  - https://github.com/markhorn-dev/astro-sphere/blob/v1.0.1/src/layouts/TopLayout.astro
  - `w-full h-full mx-auto px-5 max-w-screen-md`
- https://littlelink.io/:
  - https://github.com/sethcottle/littlelink/blob/v2.4.1/css/skeleton-light.css#L34
  - https://github.com/sethcottle/littlelink/blob/v2.4.1/css/skeleton-light.css#L59
  - `max-width: 600px;`
- https://docs.astro.build/en/guides/data-fetching/:
  - "This fetch call will be executed at build time, and the data will be available to the component template for generating dynamic HTML. If SSR mode is enabled, any fetch calls will be executed at runtime."
  - https://docs.astro.build/en/guides/client-side-scripts/#client-side-scripts
- https://www.builder.io/blog/safe-data-fetching:
  - `return (await res.json()) as Type;`
- https://hyoban.xlog.app/type-safe-fetch
- https://github.com/ardatan/fets
- https://github.com/sindresorhus/ky
- https://nikolasbarwicki.com/articles/axios-vs-fetch/#type-safe-fetch-responses
- https://d3js.org/d3-array/group#group
- https://d3js.org/d3-array/group#groups
- https://docs.astro.build/en/basics/astro-components/#the-component-template: `<ul> {myFavoritePokemon.map((data) => <li>{data.name}</li>)} </ul>`
- https://yaak.canny.io/
- https://docs.astro.build/en/basics/astro-syntax/#dynamic-html: `{visible && <p>Show me!</p>}`
- https://docs.astro.build/en/basics/astro-syntax/#fragments: `<Fragment> </Fragment>` or `<> </>`
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl:
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#wrapping_name-value_groups_in_div_elements
- https://flowbite.com/docs/typography/hr/
- https://preline.co/docs/dividers.html
- https://uiverse.io/kamehame-ha/chilly-snake-91
- https://ui.nuxt.com/components/card
- Cursor:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
  - https://developer.mozilla.org/en-US/docs/Web/CSS/url
  - https://docs.astro.build/en/guides/images/#src-vs-public
  - https://tailwindcss.com/docs/cursor#using-custom-values
  - https://kenney.nl/assets/cursor-pack
- https://stackoverflow.com/questions/23880280/change-color-of-svg-image-used-as-cursor
- `.npmrc`:
  - https://twitter.com/jacobmparis/status/1784841203680244154
  - https://twitter.com/remcohaszing/status/1784860178967343215
- https://www.stefanjudis.com/today-i-learned/readonly-files-in-vscode/
- https://ui.full.dev/
- https://github.com/feat-agency/vite-plugin-webfont-dl
- https://www.fontshare.com/pairs
- https://github.com/markhorn-dev/astro-nano

## Commands

```bash
npm install \
@astrojs/check \
@astrojs/tailwind \
@fontsource-variable/bricolage-grotesque \
@fontsource-variable/work-sans \
astro \
d3-array \
tailwindcss \
typescript \
&& npm install -D \
@eslint/config-inspector \
@joaopalmeiro/prettier-astro-config \
@types/d3-array \
@types/eslint \
"@types/node@$(cat .nvmrc | cut -d . -f 1-2)" \
@typescript-eslint/parser \
eslint \
eslint-plugin-astro \
npm-run-all2 \
prettier \
sort-package-json \
tsx
```

```bash
npm cache clean --force && rm -rf node_modules/ && npm install
```

```bash
npm config list --long
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

```html
<svg
  aria-hidden="true"
  class="pointer-events-none fixed inset-0 h-full w-full opacity-40"
>
  <filter id="grain">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.65"
      numOctaves="3"
      stitchTiles="stitch"
    ></feTurbulence>
    <feColorMatrix type="saturate" values="0"></feColorMatrix>
  </filter>
  <rect width="100%" height="100%" filter="url(#grain)"></rect>
</svg>
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

### https://web.dev/learn/html/semantic-html

```html
<header>
  <h1>Three words</h1>
  <nav>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
  </nav>
</header>
<main>
  <header>
    <h1>five words</h1>
  </header>
  <section>
    <h2>three words</h2>
    <p>forty-six words</p>
    <p>forty-four words</p>
  </section>
  <section>
    <h2>seven words</h2>
    <p>sixty-eight words</p>
    <p>forty-four words</p>
  </section>
</main>
<footer>
  <p>five words</p>
</footer>
```

### https://web.dev/learn/html/headings-and-sections#outlining_the_body_of_mlwcom

```html
<header>
  <h1>Machine Learning Workshop</h1>
  <nav></nav>
</header>
<main>
  <header>
    <h1>Full Terabyte Machine Learning Workshop</h1>
  </header>

  <section id="reg">
    <h2>Machine Learning Workshop Tickets</h2>
  </section>

  <section id="about">
    <h2>What you'll learn</h2>
  </section>

  <section id="teachers">
    <h2>Your Instructors</h2>
    <h3>Hal 9000 <span>&amp;</span> EVE</h3>
  </section>

  <section id="feedback">
    <h2>What it's like to learn good and do other stuff good too</h2>
  </section>
</main>

<footer>
  <h2>Delivering accessible, performant, standards-compliant websites since 1999.</h2>
</footer>
```

### Default `tailwind.config.mjs` file

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### `color-scheme`

- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/color-scheme
- https://odet.pt/

```html
<meta name="color-scheme" content="only light">
```
