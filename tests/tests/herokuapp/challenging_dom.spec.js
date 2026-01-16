// @ts-check

const {test, expect} = require('@playwright/test');

test('Chalenging dom - table headers are correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/challenging_dom');

  const headers = page.locator('table thead tr th');
  await expect(headers.nth(0)).toHaveText('Lorem');
  await expect(headers.nth(1)).toHaveText('Ipsum');
  await expect(headers.nth(2)).toHaveText('Dolor');
  await expect(headers.nth(3)).toHaveText('Sit');
  await expect(headers.nth(4)).toHaveText('Amet');
  await expect(headers.nth(5)).toHaveText('Diceret');
  await expect(headers.nth(6)).toHaveText('Action');
});

test('Chalenging dom - dynamic buttons work and can be clicked', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/challenging_dom');

  const buttons = page.locator('.large-2.columns > a');

  await expect(buttons).toHaveCount(3);
  await buttons.nth(0).click();
  await buttons.nth(1).click();
  await buttons.nth(2).click();
  await expect(buttons).toHaveCount(3);

});

test('Chalenging dom - Table has rows', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/challenging_dom');

  const rows = page.locator('table tbody tr');
  await expect(rows).toHaveCount(10);
});

test('Chalenging dom - Each row has 7 columns', async ({ page }) => {
  await page.goto('/challenging_dom');

  const rows = page.locator('table tbody tr');

  const rowCount = await rows.count();
  for (let i = 0; i < rowCount; i++) {
    await expect(rows.nth(i).locator('td')).toHaveCount(7);
  }
});

test('Chalenging dom - Each row has action link(edit delete)', async ({ page }) => {
  await page.goto('/challenging_dom');

  const rows = page.locator('table tbody tr');

  const rowCount = await rows.count();
  for (let i = 0; i < rowCount; i++) {
    const actions = rows.nth(i).locator('td').last().locator('a');
    await expect(actions).toHaveCount(2);
    await expect(actions.nth(0)).toHaveText('edit');
    await expect(actions.nth(1)).toHaveText('delete');

    await actions.nth(0).click();
    await expect(page).toHaveURL(/edit/)
  }
});
