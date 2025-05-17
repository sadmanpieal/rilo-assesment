import { test, expect } from '@playwright/test';

//test.use({ storageState: 'storageState.json' });

test('Navigate to Add Employee page', async ({ page }) => {
 await page.goto('http://34.235.68.130:3000/auth/login');
      await page.getByRole('textbox', { name: 'Email' }).fill('admin_rilohrm@yopmail.com');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
await page.getByRole('button', { name: 'Login' }).click();
// Navigate to Employees page after login
await page.getByRole('link', { name: 'Employees' }).click();
await page.waitForTimeout(9000);
await page.getByRole('button', { name: 'Add Employee' }).click();
  


});
