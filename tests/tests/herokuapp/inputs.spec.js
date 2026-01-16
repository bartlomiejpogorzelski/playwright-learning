// @ts-check
const { test, expect } = require('@playwright/test');

test('Inputs - numbers field', async({ page }) => {
  await page.goto('/inputs');

  
  const input = page.locator('input[type="number"]');
  await expect(input).toBeVisible();

  await input.fill("123123");
  await expect(input).toHaveValue("123123");

  await input.press("ArrowDown");
  await expect(input).toHaveValue("123122");

  await input.press("ArrowUp");
  await expect(input).toHaveValue("123123");

  await input.clear();
  await expect(input).toHaveValue('');


});
