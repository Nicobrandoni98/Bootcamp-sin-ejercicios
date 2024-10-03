/* const { test, expect, describe } = require("@playwright/test");

describe('Note app', () => {
  test('login form can be opened', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.getByRole('button', { name: 'log in' }).click()
    await page.getByTestId('username').first().fill('asd')
    await page.getByTestId('password').last().fill('asd')
    await page.getByRole('button', { name: 'log in' }).click()
  
    await expect(page.getByText('nico logged in')).toBeVisible()
  });
}); */