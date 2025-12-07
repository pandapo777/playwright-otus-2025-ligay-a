import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://lesta.ru/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Леста Игры/);
  // await page.getByRole('link', { name: 'Узнай больше android apple' }).click();
  // await expect(page).toHaveTitle(/Главная/);
});

test('get started link', async ({ page }) => {
  // await page.goto('https://lesta.ru/const page1Promise = page.waitForEvent('popup');
  await page.goto('https://tanksblitz.ru/ru/#/');

  await expect(page).toHaveTitle(/Главная/);
  await page.getByRole('link', { name: 'Новости' }).click();
  await expect(page).toHaveTitle(/Лента | Tanks Blitz/);

  // const page1 = await page1Promise;');

});
