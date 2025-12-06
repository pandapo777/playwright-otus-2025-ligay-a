import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  // Глобальное выполнение теста
  //Нужно чтобы избежать бесконечных ожиданий, но при этом учитывать медленные операции
  timeout: 30000,
  //Настроим timeout для expect, чтобы тесты не падали слишком рано, если элемент загружается немного дольше.
  expect: {timeout: 5000},
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //Если тесты запускаются в CI (то есть переменная CI установлена), то forbidOnly становится true.
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    //Настраиваем дата-атрибут
    testIdAttribute: "id",
    //  testIdAttribute: "testId",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // Делаем скрин или трейс при падении тестов
    trace: 'retain-on-failure',
    // trace: 'on-first-retry',
    //Режим запуска браузера без графического интерфейса, для CI обычно true, для локальной отладки - false
    headless: false,
    //viewport: Размеры дного браузера (например, { width : 1280, height : 720 })
    // screenshot, video: Опции для автоматической записи скриншотов/видео в случае сбоев, что полезно для отладки.
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
