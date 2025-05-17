import {test, expect} from '@playwright/test';
test('Navigate to login page  ', async ({ page }) => {
    await page.goto('http://34.235.68.130:3000/auth/login');
      await page.getByRole('textbox', { name: 'Email' }).fill('admin_rilohrm@yopmail.com');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

   await page.context().storageState({ path: 'storageState.json' });
});