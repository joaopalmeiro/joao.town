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
