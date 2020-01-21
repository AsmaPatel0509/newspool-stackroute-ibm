import { async, ComponentFixture, TestBed, inject,  } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';
import { MatFormFieldModule} from '@angular/material';
import { NO_ERRORS_SCHEMA, forwardRef } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookmarksComponent } from './bookmarks.component';

fdescribe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksComponent ],
      imports: [
        HttpClientModule,
        BrowserModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        NgxPaginationModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AuthenticationService, RoutingService,{ 
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => BookmarksComponent)
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create boookmark component', () => {
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


});
