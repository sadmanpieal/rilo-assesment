import { test, expect } from '@playwright/test';

test('Validiting internal error with verify message ', async ({ page }) => {
      await page.goto("http://34.235.68.130:3000/auth/login");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("admin_rilohrm@yopmail.com");

  await page.getByRole("textbox", { name: "Password" }).fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Employees" }).click();
  await page.getByRole("button", { name: "Add Employee" }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  if (await page.locator('text=Error!').isVisible()) {
    console.log('Error Showing');
  }


// await page.waitForTimeout(6000);

// await expect(page.getByText('First name is required')).toBeVisible();
// await expect(page.getByText('Last name is required')).toBeVisible();
// await expect(page.getByText('Invalid work email')).toBeVisible();
// await expect(page.getByText('Joining date is required')).toBeVisible();
// await expect(page.getByText('Department is required')).toBeVisible();
// await expect(page.getByText('Designation is required')).toBeVisible();
// await expect(page.getByText('Work type is required')).toBeVisible();
// await expect(page.getByText('Role is required')).toBeVisible();
// await expect(page.getByText('Employment status is required')).toBeVisible();

});