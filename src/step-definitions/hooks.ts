import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import fs from 'fs';
import path from 'path';

// Shared browser and page instances
let browser: Browser;
let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  const context = await browser.newContext({ recordVideo: { dir: 'reports/videos' } });
  page = await context.newPage();

  page.on('console', msg => console.log(msg.text()));
});

After(async function (scenario) {
  // Capture screenshot and attach it if the scenario failed
  if (scenario.result?.status === Status.FAILED) {
    const screenshotPath = `reports/screenshots/${scenario.pickle.name}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    
    // Attach screenshot to the scenario report
    this.attach(fs.readFileSync(screenshotPath), 'image/png');
  }
  
  await page.close();
});

AfterAll(async () => {
  await browser.close();
});

export { page };
