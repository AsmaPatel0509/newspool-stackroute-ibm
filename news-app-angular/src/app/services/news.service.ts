import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private mArticle: BehaviorSubject<any>[];
  private baseUrl = 'http://newsapi.org/v2';
  constructor(private httpClient: HttpClient) { }
  apiKey = '3ec8e9a8c0784e71acab5f0a690d8149';

  //get country and category news

  getCountryAndCategoryNews(country: string, category: string)
  {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?&country=${country}&category=${category}&pageSize=50`,
      {
        headers: new HttpHeaders().set("x-api-key", this.apiKey)
      }
    );
  }

  //get news date wise
  getDateWiseNews(country: string, category: string, fromDate: Date, toDate: Date): Observable<any> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?country=${country}&category=${category}&from=${fromDate}&to=${toDate}&pageSize=50`,
      {
        headers: new HttpHeaders().set("x-api-key", this.apiKey)
      }
    );
  }
  
  // get all top headlines for India
  getLatestNews(): Observable<any> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?country=in&pageSize=50`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }
  // get news based on country
  getCountryNews(country: string): Observable<any> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?country=${country}&pageSize=50`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }
  // get news based on category
  getCategoryNews(category: string): Observable<any> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?category=${category}&pageSize=50`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }
  // get news based on language
  getLanguageNews(language: string): Observable<any> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?language=${language}&pageSize=50`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }
  // get news based on user search
  getSearchNews(q: String): Observable<any> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?q=${q}&pageSize=50`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }

  // get all available sources
  getSources():Observable<any>{
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/sources`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }

  // get news based on source
  getSourceBasedNews(source:string):Observable<any>{
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines?sources=${source}`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    })
  }

  // get news videos from sources like YouTube
  watchNews():Observable<any>{
    // add sources = youtube
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/top-headlines/country=in`, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    })
  }

  
}
