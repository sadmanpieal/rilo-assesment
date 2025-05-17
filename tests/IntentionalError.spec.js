import { test, expect } from '@playwright/test';

test('Validiting internal error with verify message ', async ({ page }) => {
    await page.goto('http://34.235.68.130:3000/auth/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin_rilohrm@yopmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Employees' }).click();
  await page.getByRole('button', { name: 'Add Employee' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  //handling error message for required field 
  const errorMessage = await page.getByText(' First Name is required'); 
  await expect(errorMessage).toBeVisible();
  
 console.log('Error message is visible:', errorMessage);
  await page.getByRole('button', { name: 'Next' }).click();
  const errorMessage2 = await page.getByText('Last Name is required');
  await expect(errorMessage2).toBeVisible();
  console.log('Error message is visible:', errorMessage2);
  await page.getByRole('button', { name: 'Next' }).click();
  const errorMessage3 = await page.getByText('Email is required');
  await expect(errorMessage3).toBeVisible();
  console.log('Error message is visible:', errorMessage3);
});