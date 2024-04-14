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
