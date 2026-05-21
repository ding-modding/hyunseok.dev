import { test, expect, type Page } from "@playwright/test";

/**
 * E2E smoke test (PLAN.md D4): page loads, language toggle switches text,
 * reload persists language, ?lang=en deep-links, nav / <-> /projects keeps
 * language, résumé link present, zero console errors.
 */

/** Collect console errors so each test can assert there were none. */
function trackConsoleErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

test("home page loads with core CV content", async ({ page }) => {
  const errors = trackConsoleErrors(page);
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Hyunseok Hong",
  );
  // Signature project status rows are present.
  await expect(page.getByText("Timeschool").first()).toBeVisible();
  await expect(page.getByText("Teamplo").first()).toBeVisible();
  await expect(page.getByText("MatchA").first()).toBeVisible();

  expect(errors).toEqual([]);
});

test("language toggle switches text between KO and EN", async ({ page }) => {
  const errors = trackConsoleErrors(page);
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /toggle language|언어/i });

  // Default is Korean — the toggle shows the current language.
  await expect(page.locator("html")).toHaveAttribute("lang", "ko");
  await expect(page.getByText("KAIST 전산학부 학부생", { exact: false })).toBeVisible();

  // Toggle to English.
  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByText("KAIST CS undergraduate", { exact: false }),
  ).toBeVisible();

  expect(errors).toEqual([]);
});

test("language persists across a reload", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /toggle language|언어/i });

  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  await page.reload();
  // Persisted to localStorage -> still English after reload.
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByText("KAIST CS undergraduate", { exact: false }),
  ).toBeVisible();
});

test("?lang=en query deep-links to English", async ({ page }) => {
  const errors = trackConsoleErrors(page);
  await page.goto("/?lang=en");

  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByText("KAIST CS undergraduate", { exact: false }),
  ).toBeVisible();

  expect(errors).toEqual([]);
});

test("navigating / <-> /projects keeps the selected language", async ({
  page,
}) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /toggle language|언어/i });

  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  // Go to /projects.
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  // Back to the CV page.
  await page.getByRole("link", { name: "CV", exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("résumé PDF link is present and points to /resume.pdf", async ({
  page,
}) => {
  await page.goto("/");
  const resumeLinks = page.locator('a[href="/resume.pdf"]');
  // Linked from the hero, the contact section, and the footer.
  expect(await resumeLinks.count()).toBeGreaterThan(0);
  await expect(resumeLinks.first()).toBeVisible();
});

test("theme toggle switches and persists the color scheme", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  const themeToggle = page.getByRole("button", { name: /toggle theme|테마/i });
  await themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("/projects expands each project with problem and tech", async ({
  page,
}) => {
  const errors = trackConsoleErrors(page);
  await page.goto("/projects?lang=en");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Projects",
  );
  await expect(page.getByText("Problem").first()).toBeVisible();
  await expect(page.getByText("What was built").first()).toBeVisible();

  expect(errors).toEqual([]);
});
