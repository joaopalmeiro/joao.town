import { test, expect } from "@playwright/test";

test("ai", async ({ page }) => {
  await page.goto("/ai");

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("contribs", async ({ page }) => {
  await page.goto("/contribs");

  await expect(page).toHaveScreenshot();
});

test("index", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("uses", async ({ page }) => {
  await page.goto("/uses");

  await expect(page).toHaveScreenshot({ fullPage: true });
});
