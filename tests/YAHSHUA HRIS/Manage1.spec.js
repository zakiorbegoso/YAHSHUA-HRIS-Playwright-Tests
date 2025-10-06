    import { test, expect } from '@playwright/test';
    
    test.beforeEach('Login', async ({ page }) => {
        await page.goto('https://s1.yahshuahris.com/login');
        await page.locator('#email').fill('yahshuabba.ecptzo@gmail.com');
        await page.locator('#password').fill('Sercurepass@223');
        await page.locator('#login-button').click();
        await page.waitForURL('https://s1.yahshuahris.com/dashboard');
    });
    
     test('Address Employee Issue', async ({ page }) =>{
        await page.getByRole('link', { name: 'Manage' }).click();
        await page.getByRole('link', { name: 'Address Employee Issue' }).click();
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.locator('.select__input-container').first().click();
  await page.getByText('• Trading Operations | Day').click();
  await page.locator('#incidentPlace').click();
  await page.locator('#incidentPlace').press('CapsLock');
  await page.locator('#incidentPlace').fill('cr');
  await page.locator('#incidentPlace').press('CapsLock');
  await page.locator('#incidentPlace').click();
  await page.locator('.text-sm > .select__control > .select__indicators').click();
  await page.getByRole('option', { name: 'Absenteeism / AWOL' }).click();
  await page.locator('#briefBackground').click();
  await page.locator('#briefBackground').fill('LOREP IPSUM');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
});