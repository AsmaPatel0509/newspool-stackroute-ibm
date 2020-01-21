import { HeaderComponent } from './header.component';
import { async, ComponentFixture, TestBed  } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule ,NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { AuthenticationService } from '../services/authentication.service';
import { MatFormFieldModule,MatMenuModule} from '@angular/material';
import { NO_ERRORS_SCHEMA, forwardRef } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        MatFormFieldModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        NgxPaginationModule,
        NgxPaginationModule,
        MatFormFieldModule,
        MatMenuModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AuthenticationService,{ 
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => HeaderComponent)
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });

  it('should contain anchor tag', () => {
    let element = fixture.debugElement.query(By.css('a'));
    expect(element).toBeTruthy();
  });

  it('should contain nav tag', () => {
    let element = fixture.debugElement.query(By.css('nav'));
    expect(element).toBeTruthy();
  });

  it('should contain select tag', () => {
    let element = fixture.debugElement.query(By.css('select'));
    expect(element).toBeTruthy();
  });

  it('should have empty value of country', () => {
    expect(component.country).toBe('in');
  });

  it('should have empty value of category', () => {
    expect(component.categ).toBe('general');
  });
  
});
