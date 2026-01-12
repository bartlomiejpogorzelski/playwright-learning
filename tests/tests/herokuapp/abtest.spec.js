// @ts-check
const { test, expect } = require('@playwright/test');

test('A/B test – correct header variant', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/abtest');

  const title = page.locator('h3');

  const text = await title.textContent();

  console.log('Header text:', text);

  const validVariants = [
    'A/B Test Control',
    'A/B Test Variation 1'
  ];

  expect(validVariants).toContain(text?.trim());
});