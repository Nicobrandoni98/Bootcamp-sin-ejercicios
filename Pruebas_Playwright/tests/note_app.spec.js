const { test, expect, describe, beforeEach  } = require("@playwright/test");

describe("Note app", () => {
  beforeEach(async ({ page, request }) => {
    await request.post('http:localhost:3001/api/reset')
    await request.post('http://localhost:3001/api/users', {
      data: {
        name: 'juan',
        username: 'pedroo',
        password: 'asdasd'
      }
    })

    await page.goto('http://localhost:3000')
  })

  /* test("front page can be opened", async ({ page }) => {
    const locator = await page.getByText("Notes");
    await expect(locator).toBeVisible();
    await expect(
      page.getByText(
        "Note app, Department of Computer Science, University of Helsinki 2024"
      )
    ).toBeVisible();
  }); */

  test("user can log in", async ({ page }) => {
    await page.getByRole("button", { name: "log in" }).click();
    await page.getByTestId("username").first().fill("pedroo");
    await page.getByTestId("password").last().fill("asdasd");
    await page.getByRole("button", { name: "log in" }).click();

    await expect(page.getByText("juan logged in")).toBeVisible();
  });

  describe("when logged in", () => {
    beforeEach(async ({ page }) => {
      await page.getByRole("button", { name: "log in" }).click();
      await page.getByTestId("username").fill("asd");
      await page.getByTestId("password").fill("asd");
      await page.getByRole("button", { name: "log in" }).click();
    });

    test("a new note can be created", async ({ page }) => {
      await page.getByRole("button", { name: "new note" }).click();
      await page.getByTestId("addNote").fill("a note created by plaaaay");
      await page.getByRole("button", { name: "save" }).click();
      await expect(
        page.getByText("a note created by plaaaay")
      ).toBeVisible();
    }),
    /* describe('and a note exists', () => {
      beforeEach(async ({ page }) => {
        await page.getByRole('button', { name: 'new note' }).click()
        await page.getByRole('textbox').fill('another note by plaaaay')
        await page.getByRole('button', { name: 'save' }).click()
      })
  
      test('importance can be changed', async ({ page }) => {
        await page.getByRole('button', { name: 'make not important' }).click()
        await expect(page.getByText('make important')).toBeVisible()
      })
    
  }); */
  test('login fails with wrong password', async ({ page }) => {
    await page.getByRole('button', { name: 'log in' }).click()
    await page.getByTestId('username').fill('pedroo')
    await page.getByTestId('password').fill('wrong')
    await page.getByRole('button', { name: 'login' }).click()

    await expect(page.getByText('wrong credentials')).toBeVisible()
  })
});
})
