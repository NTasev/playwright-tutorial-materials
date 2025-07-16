const {test, expect} = require('@playwright/test')
//const {hello, helloworld} = require('./demo/hello')

test ('my first test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})

//console.log (hello());
//console.log (helloworld());