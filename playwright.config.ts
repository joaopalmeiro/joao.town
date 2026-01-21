import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  // - https://github.com/microsoft/playwright/issues/34956
  //   - https://github.com/microsoft/playwright/blob/v1.57.0/packages/playwright/src/worker/testInfo.ts#L581-L610
  //     - https://github.com/microsoft/playwright/blob/v1.57.0/packages/playwright/src/worker/testInfo.ts#L582
  //   - https://github.com/microsoft/playwright/blob/v1.57.0/packages/playwright/src/index.ts#L235
  // - https://playwright.dev/docs/api/class-testconfig#test-config-snapshot-path-template
  snapshotPathTemplate:
    "{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}-linux{ext}",

  use: {
    baseURL: "http://host.rancher-desktop.internal:4321",
  },

  // https://github.com/microsoft/playwright/blob/v1.57.0/packages/playwright-core/src/server/deviceDescriptorsSource.json
  // https://playwright.dev/docs/browsers#configure-browsers
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  webServer: {
    command: "npm run build && npm run preview",
    url: "http://localhost:4321/",
    reuseExistingServer: true,
  },
});
