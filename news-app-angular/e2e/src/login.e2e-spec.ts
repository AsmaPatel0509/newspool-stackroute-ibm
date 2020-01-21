import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
describe('LOGIN TEST', () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
    page.navigateToLogin();
  });
//Input Box Email
  it('should get username input box', () => {
    page.navigateToLogin();
    expect(page.getEmailTextBox())
    .toBeTruthy(`<input type="email" id="username" class="form-control" formControlName="username" />
    should exist in signup-login.component.html`);
  });
  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input type="password" [formControl]='password' class="input">
      should exist in signup-login.component.html`);
  });
 // Submit Button
  it('should get Login button', () => {
    page.navigateToLogin();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<button [disabled]="!loginForm.get('password').valid || !loginForm.get('username').valid"
    class="btn btn-primary" type="submit">Login</button> should exist in signup-login.component.html`);
  });

  //by default input box should be empty
  it('default values of username and password should be empty', () => {
    const emptyLoginValues = ['', ''];
    page.navigateToLogin();
    expect(page.getLoginInputBoxesDefaultValues()).toEqual(emptyLoginValues, 'Default values for username and password should be empty');
  });

  //login check with a dummy data
  // it('should login into the system', () => {
  //   page.navigateToLogin();
  //   let newLoginValues = page.addLoginValues();
  //   expect(page.getLoginInputBoxesDefaultValues()).toEqual(newLoginValues, 'Should be able to set values for username and password');
  //   // page.clickSubmitButton();
  //   // page.navigateToApp();
  //   // // page.getCurrentURL().then((url) => {
  //   //   // if (url.indexOf('login') > -1) {
  //   //     newLoginValues = page.addLoginValues();
  //       page.clickSubmitButton();
  //       // page.navigateToApp();
  //       expect(page.getCurrentURL()).toContain('/news', 'Should navigate to news page');
  //     // } else {
      //   expect(page.getCurrentURL()).toContain('dashboard/view/noteview', 'Should navigate to note view dashboard');
      // }
    // });
  // });
});