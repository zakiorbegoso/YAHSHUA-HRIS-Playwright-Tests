import { test, expect } from '@playwright/test';
    
test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://yahshuahris.com/login');
    await page.locator('#email').fill('yahshuauniversity.co@gmail.com');
    await page.locator('#password').fill('K2s3xQY7.XhnHuUajrtU');
    await page.locator('#login-button').click();
    await page.waitForURL('**/dashboard'); // Flexible matcher
});
    
     test('Talent S', async ({ page }) =>{
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.getByRole('link', { name: 'Talent Search' }).click();
  await page.getByRole('textbox', { name: 'Search for skills, roles, or' }).click();
  await page.getByRole('textbox', { name: 'Search for skills, roles, or' }).fill('ian');
  await page.getByRole('textbox', { name: 'Search for skills, roles, or' }).press('Enter');
  await page.locator('.flex-1.bg-blue-600').first().click();
  await page.getByRole('button', { name: 'Send Email' }).click();
  await page.getByRole('textbox', { name: 'Subject*' }).click();
  await page.getByRole('textbox', { name: 'Subject*' }).fill('asd');
  await page.locator('.ql-editor').click();
  await page.locator('.ql-editor').fill('asd');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('[id="headlessui-dialog-panel-:r1:"] path').click();
  await page.locator('.px-4.py-2.rounded-md.text-sm.font-semibold').first().click();
  await page.locator('.px-4.py-2.rounded-md.text-sm.font-semibold.transition-colors.text-blue-600').first().click();
  await page.locator('div:nth-child(3) > .flex.flex-col.h-full > .mt-auto > .flex > .px-4.py-2.rounded-md.text-sm.font-semibold').click();
  await page.getByRole('button', { name: 'Compare Selected (3)' }).click();
  await page.locator('[id="headlessui-dialog-panel-:r5:"] path').click();
  await page.locator('[id="headlessui-dialog-panel-:r5:"] path').click();
  await page.getByRole('button', { name: 'Remove' }).nth(2).click();
  await page.getByRole('button', { name: 'Remove' }).nth(1).click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('.select__input-container').click();
  await page.getByRole('option', { name: 'Metro Manila' }).click();
  await page.locator('select[name="gender"]').selectOption('Male');
  await page.locator('select[name="salary"]').selectOption('Below ₱15,000');
  await page.getByRole('button', { name: 'Apply Filters' }).click();
  await page.getByTitle('Remove salary filter').click();
  await page.getByTitle('Remove gender filter').click();
  await page.getByRole('button', { name: 'Clear All' }).click();
});