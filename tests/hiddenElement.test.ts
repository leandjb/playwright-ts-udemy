import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sripriyakulkarni.com/');
  await page.getByRole('link', { name: ' Automation Practice' }).click();
  await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();
  await page.getByRole('button', { name: 'Hide' }).click();
  await expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden();
  await page.getByRole('button', { name: 'Show' }).click();
  await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();
  await page.close();
});