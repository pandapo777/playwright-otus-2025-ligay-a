import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tanksblitz.ru/ru/news/#/');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('link', { name: 'Подобрать ключ!' }).click();
});