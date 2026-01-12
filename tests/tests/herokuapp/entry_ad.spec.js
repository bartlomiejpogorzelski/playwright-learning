// @ts-check
const { test, expect } = require('@playwright/test');

test('Entry ad - modal appears and can be closed', async({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/entry_ad', 
    {waitUntil: 'domcontentloaded'}
  );

  const modal = page.locator('.modal');
  const close_button = page.locator('div.modal-footer p');
  const title = modal.locator('.modal-title');

  await expect(modal).toBeVisible();
  await expect(title).toHaveText('This is a modal window');
  
  await close_button.click();
  await expect(modal).toBeHidden();

});
