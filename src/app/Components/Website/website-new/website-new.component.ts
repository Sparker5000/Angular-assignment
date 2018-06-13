import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client'
import { Website} from '../../../models/website.model.client'
import { ActivatedRoute, Router } from'@angular/router';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
import{ Websiteservice } from '../../../models/website.service.client'
import { WebsiteEditComponent } from './website-edit.component';
import { Website } from '../../../ models/website.model.client'
import { ActivateRoute, Router } from '@angular/router' ;
import { NgForm } from '@angular/forms';

	uid: string;
	website: Website[];
  name: string;
  description: string;

  constructor(private websiteService: WebsiteService, private activateRoute: ActivateRoute, private router:Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
      this.wid = params['wid'];
  		this.websites = this.websiteService.findWebsiteByUser(this.uid).suscribe(
        (website: Website[]) => {
          this.websites = websites;

        }
        ;)
      this.websiteService.findWebsiteById(this.wid).suscribe(
        (website: Website) => {
          this.website = website;
          this.name = this.website.name;
          this.description = this.website.description;
        }
        );
    
    })
   }

  update() {
    this.name = this.websiteForm.value.name;
    this.description = this,websiteForm.value.description
    const updateWeb: Website = {
      _id: this.wid,
      name: this.name,
      developerId: this.uid,
      description: this.description
    }

    this.websiteservice.updateWebsite(this.wid, updateWeb).subscribe(
      (website: Website) =>{

      }
      )
    this.router.navigate(['user', this.uid, 'website'])
  }
  
  delete(){
    this.websiteService.deleteWebsite(this.wid).subscribe(
      (websites:  Website[]) =>
        this.router.navigate(['user', this.uid,'website']) 
      }
     );
    }  

}  




  create(){
     this.name = this.websiteForm.value.name;
     this.description = this.websiteForm.value.derscription;
     //console.log
     const newWebsite: Website = {
       _id: "",
       name: this.name,
       description: this.description 
     };
     this.websiteSevrvice.createWebsite(this.uid, newWebsite).subscribe()
        (website: Website) =>
         this.router.navigate(['user' , this.uid, 'website']);
        } 
  	   );
  }

