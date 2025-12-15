// @ts-check
const { test, expect } = require('@playwright/test');

test("Geolocation - permission with latitude and longitude ", async ({page, context}) => {

  await context.grantPermissions(['geolocation'], { origin: 'https://the-internet.herokuapp.com' });
  // mock:
  await context.setGeolocation({
    latitude: 52.2297,
    longitude: 21.0122,
  });

  await page.goto('https://the-internet.herokuapp.com/geolocation');

  const button = page.locator('#content button');
  const latitude = page.locator('#lat-value');
  const longitude = page.locator('#long-value');

  await button.click();
  await expect(latitude).toHaveText("52.2297");
  await expect(longitude).toHaveText("21.0122");



});