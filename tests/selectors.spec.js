const {test, expect} = require ('@playwright/test');

test('Selectors Demo', async({page}) => {

   await page.goto('https://www.saucedemo.com/')
   await page.pause()
   
   //using any object property
   await page.click('id=user-name')
   await page.locator('id=user-name').fill('Edison')
   await page.locator('[id="user-name"]').fill('Einstein')

   //using CSS Selector
   // #login-button
   await page.locator('#login-button').click();

   //using XPath
   await page.locator('xpath=//input[@id="user-name"]').fill('Nikola')
   await page.locator('//input[@id="user-name"]').fill('Anakin')

   //using Text
   await page.locator('text=LOGIN').click()
   await page.locator('input:has-text("LOGIN")').click()
});