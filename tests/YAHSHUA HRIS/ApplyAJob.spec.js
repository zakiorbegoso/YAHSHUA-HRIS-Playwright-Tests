import { test, expect } from '@playwright/test';
    
test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://yahshuahris.com/login');
    await page.locator('#email').fill('yahshuazaki2@gmail.com');
    await page.locator('#password').fill('iDCmfFitDIai24!');
    await page.locator('#login-button').click();
    await page.goto('https://www.yahshuahris.com/apply-for-a-job');
});
    
     test('ApplyAJob', async ({ page }) =>{
      await page.setViewportSize({ width: 1920, height: 1080 });
  await page.locator('div').filter({ hasText: /^NEWTest Job \(5\)Payroll OPS TestPhilippinesApply Now!$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.locator('div').filter({ hasText: /^Yes$/ }).first().click();
  await page.locator('#yes-1').check();
  await page.getByRole('radio', { name: 'No' }).nth(2).check();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.getByRole('button', { name: 'I agree' }).click();
  await page.getByRole('button', { name: 'I agree' }).click();
});