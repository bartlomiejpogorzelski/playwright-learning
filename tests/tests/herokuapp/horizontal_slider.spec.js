// @ts-check
const { test, expect } = require('@playwright/test');

test('Horizontal slider - set values', async({ page }) => {
  await page.goto('/horizontal_slider');

  const slider = page.locator('input[type="range"]');
  const value = page.locator('#range');

  await expect(slider).toBeVisible();
  await expect(slider).toHaveValue('0');

  await expect(value).toHaveText('0');

  await slider.focus();
  // step = 0.5
  for(let i = 0; i<9; i++) {
    await page.keyboard.press('ArrowRight');
  }

  await expect(value).toHaveText('4.5');
});
