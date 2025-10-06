import { test, expect } from '@playwright/test';
    
test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://yahshuahris.com/login');
    await page.locator('#email').fill('yahshuauniversity.co@gmail.com');
    await page.locator('#password').fill('K2s3xQY7.XhnHuUajrtU');
    await page.locator('#login-button').click();
    await page.waitForURL('**/dashboard'); // Flexible matcher
});

     test('Create PMF', async ({ page }) =>{
  await page.setViewportSize({ width: 1920, height: 1080 });
 await page.getByRole('link', { name: 'Manage' }).click();
  await page.getByRole('link', { name: 'Employee Movement' }).click();
  await page.getByRole('button', { name: 'Create PMF' }).click();
  await page.locator('.select__input-container').click();
  await page.getByRole('option', { name: 'Baker Hardin' }).click();
  await page.getByLabel('New Position*').selectOption('9');
  await page.getByLabel('New Employment Status*').selectOption('55');
  await page.getByRole('textbox', { name: 'Start Date*' }).click();
  await page.getByRole('option', { name: 'Choose Thursday, October 2nd,' }).click();
  await page.getByRole('radio', { name: 'Early Regularization' }).check();
  await page.getByRole('radio', { name: 'No changes' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
});