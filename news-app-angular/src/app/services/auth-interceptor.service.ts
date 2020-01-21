import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private authenticationService:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req =  req.clone({
      headers: req.headers.set('Authorization','Bearer ' + this.authenticationService.getBearerToken())
    })
    console.log(req)
    return next.handle(req);
  }
}