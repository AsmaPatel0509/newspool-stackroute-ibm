import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardComponent } from './news-card.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';
import {  MatFormFieldModule, MatMenuModule, MatCardModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


fdescribe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardComponent ,TestComponentWrapper],
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
        MatMenuModule,
        MatCardModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthenticationService, RoutingService]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create news card', () => {
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

@Component({
  selector: 'test-component-wrapper',
  template: '<app-news-card [mArticle]="mArticle"></app-news-card>'
})
class TestComponentWrapper {
  mArticle:any={
    "source": {
        "id": null,
        "name": "Ndtv.com"
    },
    "author": null,
    "title": "Actor Shabana Azmi Injured After Her SUV Rams Truck On Mumbai-Pune Expressway - NDTV News",
    "description": "Veteran actor Shabana Azmi has been seriously injured in an accident on the Mumbai-Pune Expressway in Maharashtra's Raigad district this afternoon. Her husband Javed Akhtar was also in the car but did not suffer injuries, news agency ANI reported.",
    "url": "https://www.ndtv.com/india-news/shabana-azmi-accident-shabana-azmi-injured-after-tata-safari-suv-rams-truck-on-mumbai-pune-expresswa-2166078",
    "urlToImage": "https://c.ndtvimg.com/2020-01/l4hddc68_shabana-azmi-accident-pune-mumbai-expressway-ndtv_625x300_18_January_20.jpg",
    "publishedAt": "2020-01-18T12:25:00Z",
    "content": "Shabana Azmi Accident: Such was the impact that the SUV's front passenger's side was completely destroyed\r\nNew Delhi: Veteran actor Shabana Azmi has been seriously injured in an accident on the Mumbai-Pune Express in Maharashtra's Raigad district this afterno… [+1506 chars]"
};
}
