import { test, expect } from '@playwright/test';

// Helper to disable chat widgets that might interfere
async function disableChatWidgets(page) {
  await page.evaluate(() => {
    // Hide any chat widgets
    const selectors = [
      'iframe[title="chat widget"]',
      'iframe[src*="tawk"]',
      '.widget-visible',
      '.tawk-card',
      '.tawk-chat-bubble',
      '#tawk-message-preview'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.pointerEvents = 'none';
      });
    });
  });
}

// Helper function to handle modal overlays
async function handleModalOverlay(page) {
  await page.waitForTimeout(1000); // Allow animations to complete
  
  // Try to dismiss any visible overlays
  try {
    const overlay = page.locator('.flex.min-h-full, [role="dialog"], .modal, .overlay').first();
    if (await overlay.isVisible()) {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
    }
  } catch (e) {
    // No overlay found, continue
  }
  
  // Disable any chat widgets
  await disableChatWidgets(page);
}

// Helper function to click elements with fallback strategies
async function clickWithFallback(page, role, name) {
  try {
    await page.getByRole(role, { name }).click();
  } catch (error) {
    console.log(`${role} click failed, trying force click...`);
    try {
      await page.getByRole(role, { name }).click({ force: true });
    } catch (forceError) {
      console.log('Force click failed, trying JavaScript click...');
      await page.evaluate(({ role, name }) => {
        const element = document.querySelector(`${role}:has-text("${name}")`) || 
                       Array.from(document.querySelectorAll(role)).find(el => el.textContent.includes(name));
        if (element) element.click();
      }, { role, name });
    }
  }
}

// Helper function to interact with search input
async function interactWithSearchInput(page, action, value = '') {
  const searchInput = page.locator('input[class*="focus:none"][class*="outline-none"][class*="px-2"][class*="py-1"][class*="grow"]');
  
  if (action === 'click') {
    await searchInput.click();
  } else if (action === 'fill') {
    await searchInput.fill(value);
  } else if (action === 'type') {
    await searchInput.type(value);
  } else if (action === 'clear') {
    await searchInput.clear();
  }
}


// Helper function to handle login process
async function loginUser(page) {
  await page.goto('https://s1.yahshuahris.com/login');
  await page.getByRole('button', { name: 'Get Started' }).nth(1).click();
  await page.getByRole('link', { name: 'Sign In' }).first().click();
  await page.getByRole('textbox', { name: 'Email' }).fill('yahshuabba.ecptzo@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sercurepass@223');
  await page.getByRole('button', { name: 'Sign in' }).click();
}

 test('Create A Job', async ({ page }) =>{
  await page.setViewportSize({ width: 1920, height: 1080 });
  await loginUser(page);
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
  await page.getByRole('option', { name: 'grounds-security' }).click();
  await page.locator('.select__value-container.select__value-container--is-multi > .select__input-container').click();
  await page.getByRole('option', { name: 'Metro Manila' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: '+ Full Time' }).click();
  await page.getByRole('button', { name: '+ On-site' }).click();
  await page.getByRole('button', { name: '+ Flexible' }).click();
  await page.getByRole('textbox', { name: 'mm/dd/yyyy' }).click();
  await page.getByRole('option', { name: 'Choose Thursday, October 2nd,' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'NO DON\'T ADD THEM.' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^Screening questions\(2 configured\)Edit$/ }).getByRole('button').click();
  await page.getByRole('button', { name: '+ Urgent Hiring Need' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('radio', { name: 'Default' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('checkbox', { name: 'LinkedIn' }).check();
  await page.getByRole('checkbox', { name: 'Facebook' }).check();
  await page.getByRole('button', { name: 'Share' }).click();
});