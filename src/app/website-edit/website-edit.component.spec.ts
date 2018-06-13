import { Component, OnInit } from '@angular/core/testing';
import{ websiteservice } from '../../../services/website.service.client'
import { WebsiteEditComponent } from './website-edit.component';
import{activatedRoute, Router} from 

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
