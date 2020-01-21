import { browser, by, element, promise, ElementFinder } from 'protractor';
export class LoginPage {
  // get login component
  getloginComponent(): ElementFinder {
    return element(by.tagName('app-signup-login'));
  }
  // get current URL
  getCurrentURL() {
    return browser.getCurrentUrl();
  }
  navigateToLogin() {
    return browser.get('/signup-login');
  }
  navigateToApp() {
    return browser.get('/');
  }
  getEmailTextBox() {
    return element(by.css('[id="username"]'));
  }
  getPasswordTextBox() {
    return element(by.name('password'));
  }
  getLoginBtn() {
    return element(by.name('submit'));
  }

  // default values of input boxes
  getLoginInputBoxesDefaultValues(): any {
    let inputUsername, inputPassword;
    inputUsername = this.getEmailTextBox().getAttribute('value');
    inputPassword = this.getPasswordTextBox().getAttribute('value');
    return Promise.all([inputUsername, inputPassword]).then((values) => {
      return values;
    });
  }

  // get username and password details
  getMockLoginDetail(): any {
    const loginDetail: any = { username: 'stranger', password: 'password' };
    return loginDetail;
  }
  // set username and password input box values
  addLoginValues(): any {
    const login: any = this.getMockLoginDetail();
    this.getEmailTextBox().sendKeys(login.username);
    this.getPasswordTextBox().sendKeys(login.password);
    return Object.keys(login).map(key => login[key]);
  }
  // get submit button
  getSubmitButton(): ElementFinder {
    return this.getloginComponent().element(by.buttonText('Login'));
  }

  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }

  //     getLoginBtn(){
  //     return element(by.tagName('button')).getText();
  //   }

  //   getLoginButton(): promise.Promise<boolean> {
  //     return this.getLoginBtn().isPresent();
  //   }

  //   check submit button is present or not
  //   isSubmitButtonPresent(): promise.Promise<boolean> {
  //     return this.getSubmitButton().isPresent();
  //   }
}