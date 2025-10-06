import { test, expect } from '@playwright/test';
    
test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://yahshuahris.com/login');
    await page.locator('#email').fill('yahshuauniversity.co@gmail.com');
    await page.locator('#password').fill('K2s3xQY7.XhnHuUajrtU');
    await page.locator('#login-button').click();
    await page.waitForURL('**/dashboard'); // Flexible matcher
});
    
 test('Employee List', async ({ page }) =>{
  await page.setViewportSize({ width: 1920, height: 1080 });
    await page.getByRole('link', { name: 'Manage' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.locator('#employee-date-hired-datepicker-datepicker-button').click();
  await page.getByRole('option', { name: 'Choose Wednesday, September 17th,' }).click();
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('sadwa');
  await page.locator('#middlename').click();
  await page.locator('#middlename').fill('sadwads');
  await page.locator('#lastname').click();
  await page.locator('#lastname').fill('sadasd');
  await page.getByRole('textbox', { name: 'Date of Employment* First' }).click();
  await page.getByRole('textbox', { name: 'Date of Employment* First' }).fill('zakiorbgoso@gmail.com');
  await page.locator('#mobile').click();
  await page.locator('#mobile').fill('09772573535');
  await page.locator('#address').click();
  await page.locator('#address').fill('sawdas');
  await page.locator('#nationality').click();
  await page.locator('#nationality').fill('sadwads');
  await page.getByLabel('Gender*').selectOption('Male');
  await page.locator('#religion').click();
  await page.locator('#religion').fill('sadwas');
  await page.getByLabel('Location*').selectOption('Manila, Metro Manila');
  await page.getByLabel('Position*').selectOption('2');
  await page.getByLabel('Department*').selectOption('18');
  await page.getByLabel('Employment Status*').selectOption('18');
  await page.getByRole('button', { name: 'Save' }).click();
});