import { test, expect } from '@playwright/test'

test.describe('All My Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('homepage', async ({ page }) => {

        //user purchase
        await page.locator('[data-test="item-4-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('admin');
        await page.locator('[data-test="lastName"]').fill('admin');
        await page.locator('[data-test="postalCode"]').fill('1111');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    })

    test('logout', async ({ page }) => {

        await page.locator('text=Open Menu').click();
        await page.locator('text=Logout').click();
        await page.waitForURL('https://www.saucedemo.com/');

    })

})