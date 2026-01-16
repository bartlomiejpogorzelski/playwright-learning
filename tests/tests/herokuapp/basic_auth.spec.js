// @ts-check
const { test, expect } = require('@playwright/test');

test('Basic Auth – access protected page', async ({ browser }) => {
  
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });

  const page = await context.newPage();
  
  await page.goto('/basic_auth');
  await expect(page.locator('p')).toContainText('Congratulatio');

});