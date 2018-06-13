import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Page } from '../../../models/page.model.client'
import { Pageservice } from '../../../services/page.service.client'


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
 uid: string;
 wid:string;

  constructor() { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  	    this.uid = params['uid'];
  	    this.uid = params['uid'];
  	    this.pageService.findPageBywebsiteId(this.uid).subscribe(
          (pages: Page[]=> {
            this.pages = pages;

          }
          )

  	      });

 }

}