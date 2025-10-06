import { test, expect } from '@playwright/test';
    
test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://yahshuahris.com/login');
    await page.locator('#email').fill('yahshuauniversity.co@gmail.com');
    await page.locator('#password').fill('K2s3xQY7.XhnHuUajrtU');
    await page.locator('#login-button').click();
    await page.waitForURL('**/dashboard'); // Flexible matcher
});
    
 test('General-Employees', async ({ page }) =>{

  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'General Settings' }).click();
  await page.getByRole('link', { name: 'Employees' }).click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('C');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('P');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('Pa');
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Pagatpat');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Department').click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('I');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('Information ');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('Information S');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('Information Systems');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Position').click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('S');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('Secretary');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Employee Status').click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('R');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('P');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('Part-time');
  await page.getByRole('button', { name: 'Save' }).click();
});