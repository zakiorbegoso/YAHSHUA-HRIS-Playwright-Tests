    import { test, expect } from '@playwright/test';
    
    test.beforeEach('Login', async ({ page }) => {
        await page.goto('https://s1.yahshuahris.com/login');
        await page.locator('#email').fill('yahshuabba.ecptzo@gmail.com');
        await page.locator('#password').fill('Sercurepass@223');
        await page.locator('#login-button').click();
        await page.waitForURL('https://s1.yahshuahris.com/dashboard');
    });
    
     test('Create Memo/Policy', async ({ page }) =>{
await page.getByRole('link', { name: 'Manage' }).click();
  await page.getByRole('link', { name: 'Create Memo/Policy' }).click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.getByRole('menuitem', { name: 'Create Memo' }).click();
  await page.getByRole('textbox', { name: 'Title*' }).click();
  await page.getByRole('textbox', { name: 'Title*' }).fill('sadawd');
  await page.locator('div').filter({ hasText: /^To\*$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^To\*Add recipients with Tab\/Enter\. Use arrow keys to navigate\.$/ }).getByRole('textbox').fill('asdawdas');
  await page.getByRole('textbox', { name: 'Body' }).click();
  await page.getByRole('textbox', { name: 'Body' }).fill('awdasdawd');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('awdasda');
  await page.getByRole('textbox', { name: 'Position' }).click();
  await page.getByRole('textbox', { name: 'Position' }).fill('awdasdaw');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
});