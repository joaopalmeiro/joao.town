import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("ai", () => {
  test("visual", async ({ page }) => {
    await page.goto("/ai");
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("a11y", async ({ page }) => {
    await page.goto("/ai");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("contribs", () => {
  test("visual", async ({ page }) => {
    await page.goto("/contribs");
    await expect(page).toHaveScreenshot();
  });

  test("a11y", async ({ page }) => {
    await page.goto("/contribs");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("index", () => {
  test("visual", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("a11y", async ({ page }) => {
    await page.goto("/");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("uses", () => {
  test("visual", async ({ page }) => {
    await page.goto("/uses");
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("a11y", async ({ page }) => {
    await page.goto("/uses");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
