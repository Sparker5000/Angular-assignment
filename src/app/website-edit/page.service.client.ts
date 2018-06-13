import { Injectable } from '@angular/core';
import { Page} from  '../models/page.model.client";
// injecting service into module
@Injectable()

export class PageService {

  constructor() { }
  pages: Page = [
  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
]

//updates the page in local pages array whose _id matches the pageId parameter

 createpage(website : String, page : Page){
     page.id = Math.floor(Math.random() * 10000).toString();
     page.websiteId = websiteId;
     this.pages.push(page);
     return page;
 }


 findPageByWebsiteId(websiteId : String) {
	let result=[];
	for(let i =0; i< this.pages.length;i++){
		if(this.pages[i].websiteId === websiteId) {
		result.push(this.pages[i]);
		}
    
     }
    return result;
  }
  //updates the page in local pages array whose _id matches the pageId parameter
findPageById(pageId : String ){
  for(let i=0;this.pages.length;i++) {
    if(this.pages[i]._id === pageId) {
      return this.pages[i];
    }
  }
}
//updates the page in local pages array whose _id matches the pageId parameter

   updatePage(pageId : String, page : Page) {
       let oldpage = this.findPageById(pageId);
     const index =  this.pages.indexOf(oldPage);
     this.pages[index].name = page.name;
     this.pages[index].description = page.description;
  }


//updates the page in local pages array whose _id matches the pageId parameter

 deletePage(pageId : String) {
   let oldPage = this.findPageById(pageId);
   const index = this.pages.indexOf(oldPage);
   this.pages.splice(index, 1);
  }


}