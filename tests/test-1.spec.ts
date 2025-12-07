import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lesta.ru/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Узнай больше android apple' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Новости' }).click();
  await page1.getByRole('link').filter({ hasText: /^$/ }).nth(2).click();
  await page1.getByRole('link', { name: 'Подобрать ключ!' }).click();
  await page1.locator('div').filter({ hasText: 'Цена указана с учётом НДС и налога с продаж, если они применяются. Итоговая цена' }).nth(2).click();
  await page1.getByRole('link', { name: '2 предмета -25% | 22' }).click();
  await page1.getByRole('button', { name: 'Купить' }).click();
  await page1.getByRole('button', { name: 'Войти' }).click();
});