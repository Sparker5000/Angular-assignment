import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
	@ViewChilld('f') websiteform: NgForm;

	uid: string;
	Websites: Website[];
	name: string;
	description: string;
    website: website;
  constructor(privatate websiteService: WebsiteService, private activatedRoute: ActivateRoute, private router: Router ) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.websites = this.websiteService.findwebsiteByUser(this.uid); 
  		this.name = this.websiteService. findWebsiteById(this.uid);
  		this.description = this.website.description;
  		this.wid = this.website._id; 
  	})
  }

  update() {

  }

delete() {

}
