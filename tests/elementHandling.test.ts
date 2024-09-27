import { test, expect } from "playwright/test";

test('button with single click', async ({ page }) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html')

    await expect.soft(page.locator('//span[@id="click_type"]')).toBeHidden()
    await expect.soft(page.locator('#click_type')).toBeHidden()

    await page.locator('#click_area').click()

    await expect(page.locator('#click_type')).toBeVisible()
    await expect(page.locator('#click_type')).toHaveText('Click')
})

test('button with double click', async ({ page }) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html')

    await expect.soft(page.locator('//span[@id="click_type"]')).toBeHidden()
    await expect.soft(page.locator('#click_type')).toBeHidden()

    await page.locator('#click_area').dblclick()

    await expect(page.locator('#click_type')).toBeVisible()
    await expect(page.locator('#click_type')).toHaveText  ('Double-Click')
})

test('button with right click', async ({ page }) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html')

    await expect.soft(page.locator('//span[@id="click_type"]')).toBeHidden()
    await expect.soft(page.locator('#click_type')).toBeHidden()

    await page.locator('#click_area').click({button: "right"})

    await expect(page.locator('#click_type')).toBeVisible()
    await expect(page.locator('#click_type')).toHaveText('Right-Click')
})



