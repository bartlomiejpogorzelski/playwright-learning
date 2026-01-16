// @ts-check
const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('node:dns');

test("Dynaminc loading - element appears after clicking Start ", async({page}) => {
  await page.goto('/dynamic_loading/1');

  const button = page.locator('#start button');
  const loading = page.locator('#loading');
  const text = page.locator('#finish h4');

  await expect(text).toBeHidden();
  await expect(loading).toBeHidden();

  await button.click();
  await expect(loading).toBeVisible();
  await expect(text).toBeVisible({ timeout: 10000 });
  await expect(text).toHaveText('Hello World!');

});
    