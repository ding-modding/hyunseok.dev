import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E config. Builds and starts the production server, then runs
 * the smoke spec against it. Per PLAN.md D4.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    // Pin the browser locale so language-resolution tests are deterministic:
    // with no ?lang and no localStorage, navigator.language drives the result.
    locale: "ko-KR",
  },
  projects: [
    {
      // Uses the system-installed Chrome. The bundled Playwright Chromium
      // could not be downloaded in the build sandbox; `channel: "chrome"`
      // runs against a real Chrome instead. Drop `channel` to use the
      // bundled browser once `npx playwright install chromium` succeeds.
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
