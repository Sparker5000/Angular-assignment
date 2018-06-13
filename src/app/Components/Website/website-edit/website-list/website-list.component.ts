import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client'
import { Website } from '../../../models/website.model.client
import { ActivateRoute } from 'angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  uid: string;
  websites: Website[];

  constructor(private websiteService: WebsiteService, private activated) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
  		this.websiteService.findwebsiteByUser(this.uid).subscribe(
          (websites: Website[]) => {
          	this.websites = websites;
          }
         );
       });
    } 

  			