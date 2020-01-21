import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RoutingService } from './services/routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authenticationService:AuthenticationService,
    private routingService:RoutingService) { }
  ngOnInit() {
    console.log('Login guard activated!');
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(sessionStorage.getItem('token') == null){
      return this.router.navigate(['/login']);
    }
    
  }
  
}
