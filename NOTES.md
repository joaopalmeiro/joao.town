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
