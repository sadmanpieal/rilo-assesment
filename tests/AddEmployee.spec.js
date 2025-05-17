import { test, expect } from "@playwright/test";
test("filling up the employee registration form ", async ({ page }) => {
  await page.goto("http://34.235.68.130:3000/auth/login");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("admin_rilohrm@yopmail.com");

  await page.getByRole("textbox", { name: "Password" }).fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Employees" }).click();
  await page.getByRole("button", { name: "Add Employee" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill("sadman");
  await page
    .getByRole("textbox", { name: "Middle Name (Optional)" })
    .fill("Test");
  await page.getByRole("textbox", { name: "Last Name" }).fill("Pieal");
  await page.getByRole("textbox", { name: "Email" }).fill("test@test.com");
  await page.getByRole("textbox", { name: "Joining Date" }).fill("2025-05-17");

  await page.getByRole("combobox", { name: "Department" }).click();
  
  await page.getByRole("option", { name: "Development" }).click();
  await page.getByRole('combobox', { name: 'Designation' }).click();
  await page.getByLabel('SQA Engineer').getByText('SQA Engineer').click();
  await page.keyboard.press("Tab");

  //await page.getByRole('option', { name: 'salary' }).click();
  await page.keyboard.press("Enter");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowUp");

  await page.keyboard.press("Enter");
   await page.keyboard.press("Tab");
  await page.getByRole('textbox', { name: 'Salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('60000');
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");

  await page.keyboard.press("Tab");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");

  await page.keyboard.press("Tab");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");

  await page.getByRole('checkbox', { name: 'Sick Leave' }).click();
  await page.getByPlaceholder('Days...').click();
  await page.getByPlaceholder('Days...').fill('10');
  await page.getByPlaceholder('Days...').press('Enter');
  await page.getByRole('checkbox', { name: 'Casual Leave' }).click();
  await page.locator('input[name="leave\\.67f1fe57da294f1a41a71ab4"]').click();
  await page.locator('input[name="leave\\.67f1fe57da294f1a41a71ab4"]').fill('14');
  await page.getByRole('button', { name: 'Next' }).click();
  ///page 2 

  await page.getByRole('combobox', { name: 'Gender' }).press('Tab');
  await page.getByRole('combobox', { name: 'Blood Group' }).press('ArrowDown');
  await page.getByRole('option', { name: 'A+' }).press('ArrowDown');
  await page.getByRole('option', { name: 'A-' }).press('ArrowDown');
  await page.getByRole('option', { name: 'B+', exact: true }).press('Enter');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1998-11-14');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('sadman@test222.com');
  await page.getByPlaceholder('Phone...').click();
  await page.getByPlaceholder('Phone...').fill('01679339828');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('MObinul');
  await page.getByRole('textbox', { name: 'Relation' }).click();
  await page.getByRole('textbox', { name: 'Relation' }).fill('father');
  await page.getByRole('textbox', { name: 'Relation' }).press('Tab');
  await page.getByPlaceholder('Phone number...').fill('01679339828');
  await page.getByPlaceholder('Phone number...').press('Tab');
  await page.getByRole('textbox', { name: 'Email (Optional)' }).fill('sadman@test22.com');
  await page.getByRole('textbox', { name: 'Email (Optional)' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address' }).fill('CHittagong');
  await page.getByRole('button', { name: 'Next' }).click();

  //page 3
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('chittagong dfdf');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Mohammadia Housing q');
  await page.getByRole('textbox', { name: 'Address Line 1' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).fill('Nath Para');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).press('Tab');
  await page.getByRole('textbox', { name: 'City' }).fill('Chittagong');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByRole('textbox', { name: 'District' }).fill('Chittagong');
  await page.getByRole('textbox', { name: 'District' }).press('Tab');
  await page.getByRole('textbox', { name: 'Post Office' }).fill('Housing');
  await page.getByRole('textbox', { name: 'Post Office' }).press('Tab');
  await page.getByRole('textbox', { name: 'Post Code' }).fill('4296');

  //page 4
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('same ');
  await page.getByRole('textbox', { name: 'Address Line 1' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).fill('same ');
  await page.getByRole('textbox', { name: 'Address Line 2 (Optional)' }).press('Tab');
  await page.getByRole('textbox', { name: 'City' }).fill('same');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByRole('textbox', { name: 'District' }).fill('same');
  await page.getByRole('textbox', { name: 'District' }).press('Tab');
  await page.getByRole('textbox', { name: 'Post Office' }).fill('same');
  await page.getByRole('textbox', { name: 'Post Office' }).press('Tab');
  await page.getByRole('textbox', { name: 'Post Code' }).fill('4296');
  await page.getByRole('textbox', { name: 'Country' }).click();
  await page.getByRole('textbox', { name: 'Country' }).fill('india');
  await page.getByRole('button', { name: 'Next' }).click();
  //page 5
  await page.getByRole('textbox', { name: 'Bank Name' }).click();
  await page.getByRole('textbox', { name: 'Bank Name' }).fill('dutch bangla ');
  await page.getByRole('textbox', { name: 'Bank Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Branch Name' }).fill('chittagong');
  await page.getByRole('textbox', { name: 'Branch Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Account Number' }).fill('0101020304');
  await page.getByRole('textbox', { name: 'Account Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Account Holder Name' }).fill('0201254789');
  await page.getByRole('textbox', { name: 'Account Holder Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Routing Number' }).fill('256314789');
  await page.getByRole('textbox', { name: 'Routing Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'TIN/SSN/SIN' }).fill('123654795');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Employee created successfully').click();

  


});
