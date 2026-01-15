// @ts-check
const { test, expect } = require('@playwright/test');

test('Context_menu - right click shows alert ', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/context_menu');

  const box = page.locator('#hot-spot');
  
  page.on('dialog', async dialog =>{
    expect(dialog.message()).toBe("You selected a context menu");
    await dialog.accept();
  });//page.on === event listener

  await box.click({button: 'right'});
});