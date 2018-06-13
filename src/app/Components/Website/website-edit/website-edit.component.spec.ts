import { Component, OnInit } from '@angular/core/';
import{ Websiteservice } from '../../../models/website.service.client'
import { WebsiteEditComponent } from './website-edit.component';
import { Website } from '../../../ models/website.model.client'
import { ActivateRoute, Router } from '@angular/router' ;
import { NgForm } from '@angular/forms';

describe('WebsiteEditComponent', () => {
  let component: WebsiteEditComponent;
  let fixture: ComponentFixture<WebsiteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
