import { browser, by, element, promise, ElementFinder } from 'protractor';

export class HeaderPage {
    // getHeaderComponent(): ElementFinder {
    //   return element(by.tagName('app-signup-login'));
    // }
    navigateToHeader() {
      return browser.get('/header');
    }
    getSearchbox(){
      return element(by.className('[searchTerm]'));
    }
    getNav(){
        return element(by.className('[navbar]'));
    }
    // getNews(){
    //     return element(by.css('[routerlink="/news"]'));
    // }
    getMenu(){
        return element(by.css('[class="btn btn-group btn-sm dropleft"]')).getText();
    }
    getCategoryLinks(){
      return element(by.className('[nav-link]'));
    }
    
}