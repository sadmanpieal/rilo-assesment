const {test, expect} = require('@playwright/test');
 test('Validate the login functionality ', async ({ page }) => {
  await page.goto('http://34.235.68.130:3000/auth/login');

  await page.getByRole('textbox', { name: 'Email' }).fill('admin_rilohrm@yopmail.com');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

   await page.context().storageState({ path: 'storageState.json' });

});
test.use({ storageState: 'storageState.json' });
test('Validate the add employee section ', async ({ page }) => {
  await page.goto('http://34.235.68.130:3000/dashboard/employees/add-employee');

  await page.getByRole('link', { name: 'Employees' }).click();
  await page.getByRole('button', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('sadman');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name (Optional)' }).fill('Shahrieal');
  await page.getByRole('textbox', { name: 'Middle Name (Optional)' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Pieal');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('sadmanpieal@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Joining Date' }).fill('2025-05-17');
  await page.getByRole('combobox', { name: 'Department' }).click();
  await page.getByRole('option', { name: 'Development' }).click();
  await page.getByRole('combobox', { name: 'Designation' }).click();
  await page.getByRole('option', { name: 'SQA Engineer' }).click();
  await page.getByRole('combobox', { name: 'Pay Type' }).click();
  await page.getByRole('option', { name: 'salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('100000');
  await page.getByRole('combobox', { name: 'Reporting Manager (Optional)' }).click();
  await page.getByRole('option', { name: 'Shohel Rana' }).click();
  await page.getByRole('combobox', { name: 'Teams (Optional)' }).click();
  await page.locator('html').click();
  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.getByRole('option', { name: 'active', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Casual Leave' }).click();
  await page.getByRole('checkbox', { name: 'Sick Leave' }).click();
  await page.locator('input[name="leave\\.67f1fe44da294f1a41a71ab2"]').click();
  await page.locator('input[name="leave\\.67f1fe44da294f1a41a71ab2"]').fill('10');
  await page.locator('input[name="leave\\.67f1fe57da294f1a41a71ab4"]').click();
  await page.locator('input[name="leave\\.67f1fe57da294f1a41a71ab4"]').fill('25');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('combobox', { name: 'Gender' }).click();
  await page.getByRole('option', { name: 'MALE', exact: true }).click();
  await page.getByRole('combobox', { name: 'Blood Group' }).click();
  await page.getByRole('option', { name: 'AB+' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2025-05-01');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('sadmanpieal@gmail.com');
  await page.locator('div').filter({ hasText: /^Phone$/ }).first().click();
  await page.getByPlaceholder('Phone...').fill('01679339828');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('sadman');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Relation' }).fill('SON');
  await page.getByPlaceholder('Phone number...').click();
  await page.getByPlaceholder('Phone number...').fill('01679339828MOhammdia housing nathpara chittagong ');
  await page.locator('div').filter({ hasText: /^Email \(Optional\)$/ }).click();
  await page.getByPlaceholder('Phone number...').click();
  await page.getByPlaceholder('Phone number...').fill('01679339828');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('Mohammdia housing nath para chittagong ');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('test data');
  await page.getByRole('textbox', { name: 'Address Line 1' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).fill('test data');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).press('Tab');
  await page.getByRole('textbox', { name: 'City' }).fill('chittagong ');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByRole('textbox', { name: 'District' }).fill('chittagong ');
  await page.getByRole('textbox', { name: 'Post Office' }).click();
  await page.getByRole('textbox', { name: 'Post Office' }).fill('housing ');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('4296');
  await page.getByRole('textbox', { name: 'Country' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('the ');
  await page.getByRole('textbox', { name: 'Address Line 1' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).fill('then');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).press('Tab');
  await page.getByRole('textbox', { name: 'City' }).fill('chittagong ');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByRole('textbox', { name: 'District' }).fill('CHITTAGONG');
  await page.getByRole('textbox', { name: 'District' }).press('Tab');
  await page.getByRole('textbox', { name: 'Post Office' }).fill('4296');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('4100');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Bank Name' }).click();
  await page.getByRole('textbox', { name: 'Bank Name' }).fill('DUTCH BANGLA BANK');
  await page.getByRole('textbox', { name: 'Bank Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Branch Name' }).fill('AGRABAD');
  await page.getByRole('textbox', { name: 'Branch Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Account Number' }).fill('12121212');
  await page.getByRole('textbox', { name: 'Account Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Account Holder Name' }).fill('SADMAN');
  await page.getByRole('textbox', { name: 'Routing Number' }).click();
  await page.getByRole('textbox', { name: 'Routing Number' }).fill('123456');
  await page.getByRole('textbox', { name: 'TIN/SSN/SIN' }).click();
  await page.getByRole('textbox', { name: 'TIN/SSN/SIN' }).fill('510516520');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.goto('http://34.235.68.130:3000/dashboard/employees/add-employee');
  await page.getByText('Employee created successfully').click();

  // redirect to the all employee page
  await page.goto('http://34.235.68.130:3000/dashboard/employees/add-employee');
  await expect(page).toHaveURL('http://34.235.68.130:3000/dashboard/employees/add-employee');

});

