// @ts-check
const { test, expect } = require('@playwright/test');

test('Hover – show user data', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  const firstFigure = page.locator('.figure').nth(0);
  const figureCaption = firstFigure.locator('.figcaption');

  await expect(figureCaption).toBeHidden();

  await firstFigure.hover();
  await expect(figureCaption).toBeVisible();
  await expect(figureCaption).toContainText('name: user1');

  const link = figureCaption.locator('a');
  await expect(link).toHaveAttribute('href', '/users/1');

});