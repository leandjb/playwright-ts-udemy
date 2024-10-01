import { assert } from "console";
import { test, expect } from "playwright/test";


test.describe('Example using before and after hooks', () => {

    let page;

    async function enterCredentials(username: string, password: string) {
        await expect.soft(page.locator('[data-test="username"]')).toBeVisible();
        await expect.soft(page.locator('[data-test="username"]')).toBeEditable();
        await page.locator('[data-test="username"]').fill(username)
        

        await expect.soft(page.locator('[data-test="password"]')).toBeVisible();
        await expect.soft(page.locator('[data-test="password"]')).toBeEditable();
        await page.locator('[data-test="password"]').fill(password)

        await expect.soft(page.getByRole('button', { name: 'LOGIN' })).toBeVisible();
        await expect.soft(page.getByRole('button', { name: 'LOGIN' })).toBeEnabled();
        await page.getByRole('button', { name: 'LOGIN' }).click({force: true});
        
    }

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://www.saucedemo.com/v1/');
        enterCredentials('standard_user', 'secret_sauce')        

    })

    test.afterEach(async ({ }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.close();
        
    })

    test('do valid login', async ({ }) => {
        await expect(page.locator('.peek')).toBeVisible();
        await expect(page.getByRole('combobox')).toBeVisible();
        await expect(page.locator('#inventory_filter_container')).toContainText('Products');
        await expect(page.locator('#shopping_cart_container')).toBeVisible();

    })

    test('add item in shopping cart', async ({ }) => {

        await expect.soft(page.getByRole('combobox')).toHaveValue('az');
        await expect.soft(page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button')).toBeVisible();
        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        
        await page.locator('#shopping_cart_container').click();

        await expect.soft(page.getByRole('link', { name: 'CHECKOUT' })).toBeEnabled();
        await page.getByRole('link', { name: 'CHECKOUT' }).click();

        await page.locator('[data-test="firstName"]').fill('buyer1');
        await page.locator('[data-test="lastName"]').fill('buyer1brand');
        await page.locator('[data-test="postalCode"]').fill('20001');

        await page.getByRole('button', { name: 'CONTINUE' }).click();
        await page.getByRole('link', { name: 'FINISH' }).click();

        await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible();
        await expect(page.getByRole('heading')).toContainText('THANK YOU FOR YOUR ORDER');
        await expect(page.getByText('Your order has been')).toBeVisible();
        await expect(page.locator('#checkout_complete_container')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');

    })

})
