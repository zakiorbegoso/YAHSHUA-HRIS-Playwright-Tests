import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('P');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('Playwright software');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Playwright (software)' }).click();
  await page.getByRole('link', { name: 'Node.js' }).click();
});