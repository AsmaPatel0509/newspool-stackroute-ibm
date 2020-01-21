import { async, ComponentFixture, TestBed, inject,  } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { SignupLoginComponent } from './signup-login.component';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';

fdescribe('SignupLoginComponent', () => {
  let component: SignupLoginComponent;
  let fixture: ComponentFixture<SignupLoginComponent>;

  // let mySpy: any;
  // let obj: FormGroupDirective;
  let authenticationService: AuthenticationService;
  let routerService: RoutingService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupLoginComponent ],
      imports: [
        HttpClientModule,
        BrowserModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [AuthenticationService, RoutingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupLoginComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RoutingService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', async(() => {
    component.loginForm;
    expect(component.loginForm).toBeTruthy();
  }));
  
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });

  it('should contain input tag', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
  });

  it('form invalid when username is empty', () => {
    expect(component.username).toBeFalsy();
  });
  it('form invalid when password is empty', () => {
    expect(component.password).toBeFalsy();
  });
  it('form should be invalid when the fields are left empty', async(() => {
    expect(component.email).toBeFalsy();
    expect(component.password).toBeFalsy();
  }));

});
