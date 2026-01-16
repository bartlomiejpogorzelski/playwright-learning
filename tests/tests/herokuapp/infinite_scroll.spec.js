// @ts-check
const { test, expect } = require('@playwright/test');

test('Inputs - numbers field', async({ page }) => {
  await page.goto('/infinite_scroll');

  
  const jscroll = page.locator('.jscroll-added');

  const initialCount = await jscroll.count();

  for(let i=0; i<3; i++) {
    await page.mouse.wheel(0, 3000); // 3000 scroll down
  }

  await expect.poll(()=> jscroll.count()).toBeGreaterThan(initialCount);

});
