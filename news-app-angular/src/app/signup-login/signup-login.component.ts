import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../user';
import { NewsService } from '../services/news.service';
import { RoutingService } from '../services/routing.service';
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  isRegistered = true;
  loginForm: FormGroup;
  user: User = new User();
  errMessage: string;
  errMessage2: string;
  username: any;
  password: any;
  email: any;
  constructor(private authService: AuthenticationService, private newsService: NewsService,
    private routingService: RoutingService) {
    this.errMessage = '';
  }
  ngOnInit() {

    this.loginForm = new FormGroup({
      fullname: new FormControl(),
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      contact: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }
  onSubmit() {
    this.user.username = this.loginForm.get('username').value;
    this.user.password = this.loginForm.get('password').value;
    this.user.contact = this.loginForm.get('contact').value;
    this.user.fullname = this.loginForm.get('fullname').value;
    if (this.isRegistered) {
      this.authService.authenticateUser(this.loginForm.value).subscribe(
        data => {
          console.log("Check login input");
          this.authService.setBearerToken(data["token"]);
          this.authService.isLoggedIn = true;
          sessionStorage.setItem('username', this.user.username);
          console.log(this.authService.isLoggedIn = true);
          this.routingService.routeToNews();
        },
        error => {
          this.authService.authenticateUsername(this.user).subscribe(
            data => {
              console.log("incorrect password");
              this.errMessage = "incorrect password";
            },
            error => {
              console.log("user doesnt exist");
              this.errMessage = "user doesnt exist.... signup first!! ";
            }
          );
          this.errMessage = "Wrong credential";
          this.loginForm.reset();
        }
      );
    } else {
      this.authService.authenticateUsername(this.user).subscribe(
        data => {
          this.errMessage2 = "Username already exists!!"
        },
        error => {
          this.authService.registerUser(this.user).subscribe(
            data => {
              console.log(data);
              this.loginForm.reset();
            },
            error => {
              this.errMessage2 = "Error!! Try again";
            }
          );
        }
      );
    }
    //this.toggleIsRegistered();
  }
  toggleIsRegistered() {
    this.isRegistered = !this.isRegistered;
  }
}
