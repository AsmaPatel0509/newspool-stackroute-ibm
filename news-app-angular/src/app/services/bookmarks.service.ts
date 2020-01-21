import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookmarks } from '../bookmarks';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  flagBookmark : boolean =true;

  constructor(private httpClient: HttpClient) { }

  apiKey = '3ec8e9a8c0784e71acab5f0a690d8149';
  private baseUrl = `http://localhost:8001/articles/bookmarks`;

  addToBookmarks(bookmarks:Bookmarks): Observable<any>{
    console.log("In bookmark service: ", bookmarks.userName)
    return this.httpClient.post<any>(`${this.baseUrl}/addtobookmarks`, bookmarks)
  }

  getBookmarks(username:string): Observable<any>{
    console.log("In service: " + username)
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/getuserbookmarks?username=${username}`)
  }

  deleteBookmark(bookmarkId:number): Observable<any>{
    return this.httpClient.delete<Bookmarks>(`${this.baseUrl}/deletebookmark?bookmarkId=` + bookmarkId)
  }

}
