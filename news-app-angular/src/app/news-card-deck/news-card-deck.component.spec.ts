import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardDeckComponent } from './news-card-deck.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';
import { MatFormFieldModule} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NO_ERRORS_SCHEMA, forwardRef } from '@angular/core';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';


fdescribe('NewsCardDeckComponent', () => {
  let component: NewsCardDeckComponent;
  let fixture: ComponentFixture<NewsCardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardDeckComponent ],
      imports :[
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create newsdeck component', () => {
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
