import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../service/website.service.client'
import { Website } from '../../../models/website.model.client'
import { ActivateRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms'



@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {



	uid: string;
	websites: Website[];
	name: string;
	description: string;

  constructor() { }

  ngOnInit() {
  	this.uid = params['uid'];
  	this.wid = params['wid'];
  	this.websites = this.websiteService.findwebsiteByUser(this.uid);
  	

  }

}
