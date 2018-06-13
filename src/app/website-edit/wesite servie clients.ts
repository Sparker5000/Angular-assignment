import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

module.exports = function(app)


createWebsite(userId, website) {
	website.id = Math.floor(Math.random()* 10000).toString();
	website.developer = userId;
	this.websites.push(website);
	return website;
}

findWebsiteByUser(userId){
 var result =[];
 for (let i = 0;i<this.websites.length; i++) {
 	if (this.websites[i].developerId === userId) {
 		result.push(this.websites[i]);
 			
 		}	

 	}
 	return result;	
}

findWebSiteById(websiteId){
	for (let i = 0; i<this. websites.length; i++){
		if (this.websites[i]._id === websiteId) {
			return this.websites[i];
			// code...
		}
		
	}
}

updatewebsite(websiteId, website ) {
	var oldWeb = this.findWebSiteById(websiteId);
	var index = this.websites.indexOf(oldWeb);
	this.websites[index].name = website.name;
	this.websites[index].description = website.description;

}

deleteWebsite(websiteId) {
 var web = this.findWebSiteById(websiteId);
 var index = this.websites.indexOf(web);
 this.websites.splice(index, 1);
  }
  
}

	

  

















