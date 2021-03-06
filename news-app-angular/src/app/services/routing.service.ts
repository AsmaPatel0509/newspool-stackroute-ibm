import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router, private location: Location) { }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
  routeToLogin() {
    this.router.navigate(['login']);
  }
  routeToNews() {
    this.router.navigate(['news']);
  }
  routeToHome(){
    this.router.navigate(['home']);
  }
  routeToBookmarks(){
    this.router.navigate(['bookmarks']);
  }
}
