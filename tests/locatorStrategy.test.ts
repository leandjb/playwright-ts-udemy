import { test } from "@playwright/test";

test('different locators strategy', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('input#password.form_input').fill('secret_sauce');
    
    await page.locator('text=login').click();
    await page.pause();
    // await page.locator('input:has-text("LOGIN")').click();
})
