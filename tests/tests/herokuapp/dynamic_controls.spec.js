// @ts-check
const { test, expect } = require('@playwright/test');

test("Dynaminc control - removing and adding checkboxes", async({page}) => {
    
  await page.goto('/dynamic_controls');

  const checkbox = page.locator('#checkbox');
  const removeButton = page.locator('#checkbox-example button');
  const message = page.locator('#message');

  await expect(checkbox).toBeVisible();
  await expect(message).toBeHidden();
  await removeButton.click();
  await expect(checkbox).toBeHidden();
  await expect(checkbox).not.toBeVisible();
  await expect(message).toBeVisible();
  await expect(message).toHaveText("It's gone!")
  await removeButton.click();
  await expect(message).toHaveText("It's back!")
  // console.log(await page.content());
  //await page.waitForSelector('#checkbox', { state: 'attached', timeout: 10000 });
  await expect(checkbox).toBeVisible();


  const inputText = page.locator("#input-example input");
  const enableButton = page.locator("#input-example button");
  const messageVisibility = page.locator('#input-example #message');

  await expect(inputText).toBeDisabled();
  await expect(messageVisibility).toBeHidden();
  
  await enableButton.click();
  await expect(inputText).toBeEnabled();
  await inputText.fill("Some text: asdf")
  await expect(messageVisibility).toBeVisible();
  await expect(messageVisibility).toHaveText("It's enabled!");
  
  await enableButton.click();
  await expect(inputText).toBeDisabled();
  await expect(inputText).toHaveValue("Some text: asdf");
  await expect(messageVisibility).toBeVisible();
  await expect(messageVisibility).toHaveText("It's disabled!");





}
);