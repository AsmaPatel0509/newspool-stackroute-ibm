import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesComponent } from './sources.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatMenuModule, MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';

fdescribe('SourcesComponent', () => {
  let component: SourcesComponent;
  let fixture: ComponentFixture<SourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesComponent ],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Source Component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(element).toBeTruthy();
  });

});
