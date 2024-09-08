import { test, expect } from "@playwright/test";

test.only('Orange HRM Login Scenario', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect.soft(page).toHaveTitle('OrangeHRM');
    await expect.soft(page).toHaveTitle(/.*HRM/);

    await page.getByPlaceholder('Username').pressSequentially('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.close();
})
