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

## Commands

```bash
npm create astro@latest -- --help
```

```bash
npx playwright install chromium --with-deps
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
