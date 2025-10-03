    import { test, expect } from '@playwright/test';
    
    test.beforeEach('Login', async ({ page }) => {
        await page.goto('https://s1.yahshuahris.com/login');
        await page.locator('#email').fill('yahshuabba.ecptzo@gmail.com');
        await page.locator('#password').fill('Sercurepass@223');
        await page.locator('#login-button').click();
        await page.waitForURL('https://s1.yahshuahris.com/dashboard');
    });
    

 test('Design Benefits', async ({ page }) =>{
   await page.getByRole('link', { name: 'Manage' }).click();
  await page.getByRole('link', { name: 'Design Benefits' }).click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.getByRole('textbox', { name: 'Title*' }).fill('asdasd');
  await page.locator('div').filter({ hasText: /^Add recipients with Tab\/Enter\. Use arrow keys to navigate\.CCBCC$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Add recipients with Tab\/Enter\. Use arrow keys to navigate\.CCBCC$/ }).getByRole('textbox').fill('za');
  await page.getByText('Liza Dela Cruz').click();
  await page.getByRole('textbox', { name: 'Purpose*' }).click();
  await page.getByRole('textbox', { name: 'Purpose*' }).fill('das');
  await page.getByRole('textbox', { name: 'Benefits*' }).click();
  await page.getByRole('textbox', { name: 'Benefits*' }).fill('asd');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('textbox', { name: 'Coverage*' }).click();
  await page.getByRole('textbox', { name: 'Coverage*' }).fill('asd');
  await page.getByRole('textbox', { name: 'Eligibility*' }).click();
  await page.getByRole('textbox', { name: 'Eligibility*' }).fill('asd');
  await page.getByRole('button', { name: 'Send' }).click();
});