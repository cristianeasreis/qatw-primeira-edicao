// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://paybank-mf-auth:3000/');
  await page.getByRole('textbox', { name: 'Digite seu CPF' }).click();
  await page.getByRole('textbox', { name: 'Digite seu CPF' }).fill('00000014141');
  await page.getByRole('button', { name: 'Continuar' }).click();

});
