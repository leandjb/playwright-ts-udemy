import { table } from "console";
import {test, expect} from "playwright/test";

test('handing web table', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    const simpleTable = page.locator("table[name='BookTable']")

    const columns = simpleTable.locator("tr th")
    console.log("Number of Columns for Simple Web Table: ", await columns.count())
    
    const rows = simpleTable.locator("tbody tr")
    console.log("Number of Rows for Simple Web Table: ", await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(7)


    await page.close()    
})


test('selecting single checkbox in the table', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")


    await page.close()    
})

test('selecting multiple checkbox in the table', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")


    await page.close()    
})

