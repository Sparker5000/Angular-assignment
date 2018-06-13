import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client'
import { Website } from '../../../models/website.model.client'
import { AtivateRoute } from '@angular/router';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

    uid: string;
	websites: Websites[];

  constructor(private websiteService: Websiteservice, private activatedRouter) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>) {
  	    this.uid = params['uid'];
  	    this.websites = this.websiteService.findWebsiteByUser(this.uid);
  })

 }

} 

