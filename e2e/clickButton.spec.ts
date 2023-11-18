/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'next page' }).click();
});
