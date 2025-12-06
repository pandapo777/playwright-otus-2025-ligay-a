import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/login');

  await expect(page).toHaveTitle(/Login | next.js RealWorld example app/);


});
test.skip('has form authoriztion', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/login');

  await expect(page.getByText('Sign inNeed an account?')).toBeVisible();


});

test.skip('has field "password"', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/login');

  await expect(page.getByTestId('input-password')).toBeVisible();

});

test.skip('has button "Sign in"', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/login');

  await expect(page.getByTestId('btn-submit')).toBeVisible();

});
test.skip('get link "Sign in"', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();

});