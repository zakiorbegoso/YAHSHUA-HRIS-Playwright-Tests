import { test, expect } from '@playwright/test';
    
test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://yahshuahris.com/login');
    await page.locator('#email').fill('yahshuauniversity.co@gmail.com');
    await page.locator('#password').fill('K2s3xQY7.XhnHuUajrtU');
    await page.locator('#login-button').click();
    await page.waitForURL('**/dashboard'); // Flexible matcher
});

test('Evaluation History', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
 await page.getByRole('link', { name: 'Manage' }).click();
  await page.getByRole('link', { name: 'Evaluation History' }).click();
  await page.getByRole('button', { name: 'View' }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.locator('[id="headlessui-dialog-panel-:r1:"] path').click();
  await page.getByRole('textbox', { name: 'Search' }).fill('');
  await page.getByRole('textbox', { name: 'Search' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Search' }).fill('L');
  await page.getByRole('textbox', { name: 'Search' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Search' }).fill('Lance');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
});