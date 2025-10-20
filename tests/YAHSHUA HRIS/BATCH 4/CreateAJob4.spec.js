import { test, expect } from '@playwright/test';
    
test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://yahshuahris.com/login');
    await page.locator('#email').fill('yahshuauniversity.co@gmail.com');
    await page.locator('#password').fill('K2s3xQY7.XhnHuUajrtU');
    await page.locator('#login-button').click();
    await page.waitForURL('**/dashboard'); // Flexible matcher
});

test('test', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
  await page.getByRole('link', { name: 'Post a Job' }).click();
  await page.getByRole('button', { name: 'Create a Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title*' }).click();
  await page.getByRole('textbox', { name: 'Job Title*' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Job Title*' }).fill('S');
  await page.getByRole('textbox', { name: 'Job Title*' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Job Title*' }).fill('System ');
  await page.getByRole('textbox', { name: 'Job Title*' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Job Title*' }).fill('System A');
  await page.getByRole('textbox', { name: 'Job Title*' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Job Title*' }).fill('System Analyst');
  await page.locator('.select__input-container').first().click();
  await page.getByRole('option', { name: 'Senior Dev' }).click();
  await page.locator('div').filter({ hasText: /^Select locations\.\.\. \(max 10\)$/ }).nth(3).click();
  await page.getByRole('option', { name: 'Metro Manila' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: '+ Full Time' }).click();
  await page.getByRole('button', { name: '+ On-site' }).click();
  await page.getByRole('button', { name: '+ 8 Hours' }).click();
  await page.getByRole('spinbutton', { name: 'How many people do you want' }).click();
  await page.getByRole('spinbutton', { name: 'How many people do you want' }).fill('5');
  await page.getByRole('textbox', { name: 'mm/dd/yyyy' }).click();
  await page.getByRole('option', { name: 'Choose Monday, October 20th,' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'NO DON\'T ADD THEM.' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^Screening questions\(2 configured\)Edit$/ }).getByRole('button').click();
  await page.getByRole('button', { name: '+ Location' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('radio', { name: 'Default' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('checkbox', { name: 'LinkedIn' }).check();
  await page.getByRole('checkbox', { name: 'Facebook' }).check();
  await page.getByRole('button', { name: 'Share' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('button', { name: 'No' }).click();
});