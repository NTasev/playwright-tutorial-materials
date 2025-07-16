import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    //await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Sasuke');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.locator('text=Sign in').click();

    await page.goto('https://demo.applitools.com/', { waitUntil: 'networkidle' });
    await expect(page.locator('text=Sign in')).toBeVisible({ timeout: 10000 });
})

test.only('Login demo test 2', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.pause()
    await page.getByRole('link', { name: 'Log out' }).click();
})

test.only('Login Demo Test 3', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('textbox', { name: 'Password' }).press('Tab');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.close();

})