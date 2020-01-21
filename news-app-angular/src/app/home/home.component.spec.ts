import { async, ComponentFixture, TestBed, inject  } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { HomeComponent } from './home.component';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';
import { MatFormFieldModule} from '@angular/material';
import { NO_ERRORS_SCHEMA, forwardRef, Injectable, ɵNG_INJECTABLE_DEF } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Country } from '../header/header.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // let country : Country;
  let authenticationService: AuthenticationService;
  let routerService: RoutingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        Injectable
      ],
      providers: [AuthenticationService, RoutingService,{ 
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => HomeComponent)
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // country = TestBed.get(country);
    authenticationService = TestBed.get(authenticationService);
    routerService = TestBed.get(routerService);
    fixture.detectChanges();
  });

  // it('should create component', () => {
  //   component = fixture.componentInstance;
  //   // expect(component.country.value).toBeFalsy();
  //   // expect(component.category.value).toBeFalsy();
  //   expect(component).toBeTruthy();
  // });

  // it('should contain div tag', () => {
  //   let element = fixture.debugElement.query(By.css('div'));
  //   expect(element).toBeTruthy();
  // });

  // it('should have empty country value', () => {
  //   expect(component).toBeTruthy();
  //   expect(component.country).toBeUndefined();
  // });

});
