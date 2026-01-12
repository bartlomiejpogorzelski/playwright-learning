// @ts-check
const { test, expect } = require('@playwright/test');

test('Broken Images – verify that images load correctly', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/broken_images');

  const images = page.locator('img');

  const count = await images.count();

  for(let i = 0; i < count; i++) {
    const img = images.nth(i);

    const src = await img.getAttribute("src");
    console.log(`src:  ${src}`);

    const isLoaded = await img.evaluate((imgEl) => {
      console.log("imgEl " + imgEl.src);
      return imgEl.complete && imgEl.naturalWidth > 0;
    } )

    if (isLoaded) {
      console.log(`✅ Image loaded: ${src}`);
    } else {
      console.log(`❌ Broken image: ${src}`);
    }

  }
});
