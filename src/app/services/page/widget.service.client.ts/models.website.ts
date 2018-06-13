import { Injectable } from '@angular/core';
import { Website } from '../models/website.model.client';
// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }
  websites: Website[] = [
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  //new Website("789", "Chess")
];


createWebsite(userId: string, website: Website) {
	website.id = Math.floor(Math.random()* 10000).toString();
	website.developer = userId;
	this.websites.push(website);
	return website;
}

findWebsiteByUser(userId: string){
 var result =[];
 for (let i = 0;i<this.websites.length; i++) {
 	if (this.websites[i].developerId === userId) {
 		result.push(this.websites[i]);
 			
 		}	

 	}
 	return result;	
}

findWebSiteById(websiteId: string){
	for (let i = 0; i<this. websites.length; i++){
		if (this.websites[i]._id === websiteId) {
			return this.websites[i];
			// code...
		}
		
	}
}

updatewebsite(websiteId: string, website: Website)  {
	var oldWeb = this.findWebSiteById(websiteId);
	var index = this.websites.indexOf(oldWeb);
	this.websites[index].name = website.name;
	this.websites[index].description = website.description;

}

deleteWebsite(websiteId: string) {
 var web = this.findWebSiteById(websiteId);
 var index = this.websites.indexOf(web);
 this.websites.splice(index, 1);
  }
  
}