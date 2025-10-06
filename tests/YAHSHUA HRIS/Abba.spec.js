import { test, expect } from '@playwright/test';
    
test('Login', async ({ page }) => {
    await page.goto('https://theabbapayroll.com/login');
    await page.locator('#email').fill('username ninyo');
    await page.locator('#password').fill('password');
    await page.locator('#signin-button').click();
    await page.waitForURL('**/dashboard'); 
});