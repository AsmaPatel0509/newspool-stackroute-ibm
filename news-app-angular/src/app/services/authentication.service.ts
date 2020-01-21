import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;
  private baseUrl = 'http://localhost:8002/users';

  constructor(private httpClient: HttpClient) { }


  registerUser(user: User): Observable<User> {
    return this.httpClient.post<any>(`${this.baseUrl}/registeruser`, user);
  }

  authenticateUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, user,
      { headers: new HttpHeaders().set('responseType', 'text') }).pipe(
        map(
          userData => {
            sessionStorage.setItem('username', user.username);
            let tokenStr = userData.token;
            console.log("Token string: " + tokenStr);
            sessionStorage.setItem('token', tokenStr);
            return userData;
          }
        )
      );
  }


  authenticateUsername(user: User): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/checkUsername`, user);
  }

  setBearerToken(token: string) {
    sessionStorage.setItem('token', token);
  }
  getBearerToken() {
    return sessionStorage.getItem('token');
  }
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        if (sessionStorage.getItem('token')) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    );
    return promise;
  }

  isUserAuthenticated(){
    if(sessionStorage.getItem('token') != null){
      return true;
    }else{
      return false;
    }
    
  }
}
