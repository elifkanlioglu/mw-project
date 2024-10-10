import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../step-definitions/hooks'; // Import the page object

Given('I navigate to {string}', async (url: string) => {
  await page.goto(url);
});

Then('the page title should be {string}', async (expectedTitle: string) => {
  const actualTitle = await page.title();
  expect(actualTitle).toBe(expectedTitle);
});
