### 🐞 Bug Report: Slow Navigation to Add Employee Page

**URL:**
- From: `http://34.235.68.130:3000/dashboard/employees`
- To: `http://34.235.68.130:3000/dashboard/employees/add-employee`

**Issue:**
Navigating to the "Add Employee" page takes unusually long (17-25 seconds), with no loading indicator shown.
![Screenshot 2025-05-17 203324](https://github.com/user-attachments/assets/7a29e7cb-c639-4be9-b8f5-82c1a575c904)


**Expected:**
Page should load quickly (within 1–2 seconds) or display a loader during the wait.

**Impact:**
Poor user experience and potential confusion.

**Suggestion:**
Investigate performance issues and add loading feedback.


how to run 
1. Clone the repo  
2. Run `npm install`  
3. Run `npx playwright install`  
4. Run tests with `npx playwright test AddEmployee.spec.js --project=firefox --headed `
5.  Run tests with `npx playwright test Authentication.spec.js --project=firefox --headed `
6.   Run tests with `npx playwright test navigation.spec.js --project=firefox --headed `
7.    Run tests with `npx playwright test Intentionalerror.spec.js --project=firefox --headed `


**Use Single Browser:**

![Screenshot 2025-05-17 185344](https://github.com/user-attachments/assets/f1be3630-9590-4e9f-b307-0d9782e7ead6)

### Otherwise it will give browser error like this
  
