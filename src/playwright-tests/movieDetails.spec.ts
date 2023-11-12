/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test('clickDetails', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page
    .locator('li')
    .filter({ hasText: 'Oppenheimer' })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'close' }).click();
  await page
    .locator('li')
    .filter({ hasText: 'The Marvels' })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'close' }).click();
  await page
    .locator('li')
    .filter({ hasText: "Five Nights at Freddy's" })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'close' }).click();
  await page
    .locator('li')
    .filter({ hasText: 'The Marvels' })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'close' }).click();
  await page
    .locator('li')
    .filter({ hasText: "Five Nights at Freddy's" })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'close' }).click();
  await page
    .locator('li')
    .filter({ hasText: 'Oppenheimer' })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'close' }).click();
});
