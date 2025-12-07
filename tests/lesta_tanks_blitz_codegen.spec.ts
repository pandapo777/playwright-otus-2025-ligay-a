import { test, expect } from '@playwright/test';

test('Проверка покупки "Запертые контейнеры"', async ({ page }) => {
    await page.goto('https://lesta.ru/');
    
    await expect(page).toHaveTitle(/Леста Игры/);

    const page1Promise = page.waitForEvent('popup');

    await expect(page.getByRole('link', { name: 'Узнай больше android apple' })).toBeVisible()

    await page.getByRole('link', { name: 'Узнай больше android apple' }).click();

    const page1 = await page1Promise;
    await expect(page1).toHaveTitle(/Главная | Tanks Blitz/);
    await expect(page1.getByRole('link', { name: 'Новости' })).toBeVisible();

    await page1.getByRole('link', { name: 'Новости' }).click();
    await expect(page1).toHaveTitle(/Лента | Tanks Blitz/);
    // await expect(page1.locator('[class*="news-annotation_link"]').nth(0)).toBeVisible();

    await page1.locator('[class*="news-annotation_link"]').nth(0).click();
    await expect(page1).toHaveURL('https://tanksblitz.ru/ru/news/event/lockboxes-twist-dec/#/');
    await expect(page1.getByText( 'Подобрать ключ!' )).toBeVisible();

    await page1.getByText( 'Подобрать ключ!' ).click();
    await expect(page1).toHaveTitle(/Премиум магазин Леста Игры | Мир танков, Мир кораблей, Tanks Blitz/);

    await page1.getByRole('link', { name: /2 предмета -25%/ }).click();

    await page1.getByRole('button', { name: 'Купить' }).click();

    await expect(page1).toHaveTitle(/Войти – Леста ID/);
});