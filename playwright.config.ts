import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure', // Capture screenshots on test failures
    video: 'retain-on-failure',    // Record video only when tests fail
    trace: 'on-first-retry',       // Capture trace on the first retry
  },
  reporter: [
    ['html', { outputFolder: 'reports/playwright-report', open: 'never' }]
  ],
});
