import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Voy a tener suerte' }).click();
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('search')).toContainText('Voy a tener suerte');
  await expect(page.getByLabel('Búsqueda por voz')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Buscar con Google' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Voy a tener suerte' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'English' })).toBeVisible();
});
