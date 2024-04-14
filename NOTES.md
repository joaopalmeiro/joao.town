# Notes

- https://github.com/joaopalmeiro/template-astro
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
- Fonts:
  - https://docs.astro.build/en/guides/fonts/#using-fontsource
  - https://docs.astro.build/en/guides/fonts/#register-fonts-in-tailwind
  - https://tailwindcss.com/docs/font-family#using-custom-values
  - https://caniuse.com/variable-fonts
  - https://fontsource.org/fonts/bricolage-grotesque/install
  - https://fontsource.org/fonts/work-sans/install

## Commands

```bash
npm install \
@astrojs/check \
astro \
typescript \
&& npm install -D \
@eslint/config-inspector \
@joaopalmeiro/prettier-astro-config \
@types/eslint \
@typescript-eslint/parser \
eslint \
eslint-plugin-astro \
npm-run-all2 \
prettier \
sort-package-json
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
