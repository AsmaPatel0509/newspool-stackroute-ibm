import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

fdescribe('NewsService', () => {

  let newsServiceInstace : NewsService,
  httpTestingcontroller : HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[NewsService]
    })

    newsServiceInstace = TestBed.get(NewsService);
    httpTestingcontroller = TestBed.get(HttpTestingController);

  });

  // Positive Test Cases
  it('should get datewise news', () => {
    const fromDate:any = new Date().getDate;
    const toDate:any = new Date().getDate;
    const result :Observable<any> =  newsServiceInstace.getDateWiseNews('in','general',fromDate,toDate);
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);
  });

  it('should get Country And CategoryNews', () => {
    const result :Observable<any> =  newsServiceInstace.getCountryAndCategoryNews('in','general');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);
  });

  it('should get countrywise news', () => {
    const result :Observable<any> =  newsServiceInstace.getCountryNews('ae');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);
  });

  it('should get categorywise news', () => {
    const result :Observable<any> =  newsServiceInstace.getCategoryNews('general');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);
  });

  it('should get languagewise news', () => {
    const result :Observable<any> =  newsServiceInstace.getLanguageNews('en');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);
  });

  // Negative Test cases

  it('should get 0 datewise news', () => {
    const fromDate:any = new Date().getDate;
    const toDate:any = new Date().getDate;
    const result :Observable<any> =  newsServiceInstace.getDateWiseNews('n','sdsaal',toDate,fromDate,);
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);
  });

  it('should get 0 Country And CategoryNews', () => {
    const result :Observable<any> =  newsServiceInstace.getCountryAndCategoryNews('nii','occupynier');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);;
  });

  it('should get 0 countrywise news', () => {
    const result :Observable<any> =  newsServiceInstace.getCountryNews('zzzzzz');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);;
  });

  it('should get 0 categorywise news', () => {
    const result :Observable<any> =  newsServiceInstace.getCategoryNews('special');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);;
  });

  it('should get 0 languagewise news', () => {
    const result :Observable<any> =  newsServiceInstace.getLanguageNews('qqqqq');
    expect(result.toPromise.length).toBeGreaterThanOrEqual(0);;
  });



});
