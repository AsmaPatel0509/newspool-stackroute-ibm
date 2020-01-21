import { HeaderPage } from './header.po';

describe('HEADER TEST', () => {
  let page: HeaderPage;
  beforeEach(() => {
    page = new HeaderPage();
    page.navigateToHeader();
  });
//searchbox
  it('should get searchbox', () => {
    page.navigateToHeader();
    expect(page.getSearchbox())
    .toBeTruthy(`<input placeholder="Search" type="search" class="searchTerm" #keyword> 
    should exist in header.component.html`);
  });

//navbar
  it('should get navbar', () => {
    page.navigateToHeader();
    expect(page.getNav())
    .toBeTruthy(`  <nav class="navbar  navbar-dark bg-info"> 
    should exist in header.component.html`);
  });

//menu
  it('should get menu-button', () => {
    page.navigateToHeader();
    expect(page.getMenu()).toEqual('Menu');
  });

//categories
//menu
it('should get category-links', () => {
  page.navigateToHeader();
  expect(page.getCategoryLinks()).toBeTruthy('should exist in header.component.html');
});



});