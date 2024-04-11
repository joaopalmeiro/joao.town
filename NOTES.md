# Notes

- https://github.com/withastro/astro/tree/main/examples/minimal
- https://ota-meshi.github.io/eslint-plugin-astro/user-guide/
- https://docs.astro.build/en/editor-setup/#prettier
- https://docs.astro.build/en/concepts/why-astro/#easy-to-use:
  - "The `.astro` UI language is a superset of HTML: any valid HTML is valid Astro templating syntax!"
- https://docs.astro.build/en/concepts/islands/:
  - Islands architecture
  - "(...) most JavaScript-based web frameworks hydrate & render an entire website as one large JavaScript application (also known as a single-page application, or SPA). SPAs provide simplicity and power but suffer from page-load performance problems due to heavy client-side JavaScript usage."
  - "In Astro, an "island" refers to any interactive UI component on the page. Think of an island as an interactive widget floating in a sea of otherwise static, lightweight, server-rendered HTML."
  - "An island always runs in isolation from other islands on the page, and multiple islands can exist on a page. Islands can still share state and communicate with each other, even though they run in different component contexts."
  - "Turning any static UI component into an interactive island requires only a `client:*` directive."
- https://esbench.com/
- https://docs.astro.build/en/basics/project-structure/
- https://docs.astro.build/en/reference/configuration-reference/
- https://docs.astro.build/en/basics/astro-components/:
  - "The most important thing to know about Astro components is that they don't render on the client. They render to HTML either at build-time or on-demand using server-side rendering (SSR). You can include JavaScript code inside of your component frontmatter, and all of it will be stripped from the final page sent to your users' browsers."
  - "You can safely write code here that is expensive or sensitive (like a call to your private database) (...)"
  - `const data = await fetch('SOME_SECRET_API_URL/users').then(r => r.json());`
  - "Mix HTML with JavaScript expressions, similar to JSX": `<ul>{myFavoritePokemon.map((data) => <li>{data.name}</li>)}</ul>`
  - Component props: `Astro.props` + `interface Props`
  - https://docs.astro.build/en/basics/astro-components/#transferring-slots
- Data fetching:
  - https://csvbase.com/
  - https://docs.astro.build/en/guides/backend/turso/
  - https://docs.astro.build/en/guides/data-fetching/
- https://docs.astro.build/en/guides/fonts/
- https://docs.astro.build/en/guides/deploy/
- Tailwind CSS:
  - https://docs.astro.build/en/guides/styling/#tailwind
  - https://docs.astro.build/en/guides/integrations-guide/tailwind/
  - https://github.com/withastro/astro/tree/main/packages/integrations/tailwind/

## Commands

```bash
npm create astro@latest -- --template minimal
```
