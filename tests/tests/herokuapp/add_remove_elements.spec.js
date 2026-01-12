// @ts-check
const { test, expect } = require('@playwright/test');

test('Add or remove elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // const addElement = page.locator('.example button');
  // const deleteElement = page.locator('.added-manually');

  const addElement = page.getByRole('button', { name: 'Add Element' });
  const deleteElements = page.locator('button', { hasText: 'Delete' });

  await expect(addElement).toBeVisible();
  await expect(deleteElements).toBeHidden();

  await addElement.click();
  await expect(deleteElements).toBeVisible();
  await expect(deleteElements).toHaveCount(1);

  await addElement.click();
  await addElement.click();
  await expect(deleteElements).toHaveCount(3);

  await deleteElements.nth(0).click();
  await expect(deleteElements).toHaveCount(2);



});
