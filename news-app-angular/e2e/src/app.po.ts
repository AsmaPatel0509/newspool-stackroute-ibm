import { browser, by, element, promise, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
  return browser.get('/');

  // return browser.get(browser.baseUrl) as Promise<any>;
  }
  // getTitleText() {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }

}
