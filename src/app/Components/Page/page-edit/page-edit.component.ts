import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {





 @ViewChild('f') pageForm:

	  uid: string;
    wid: string;
    pid: string;
    name: string;
    description: string;
    page: Page


	  constructor(private pageservices: pageService, private activateroute: Activqte, private router: Router) { }

  ngOnInit() {
    this.activateroute.params.subscribe(params =>{
   	this.uid = params['uid'];
  	this.wid = params['wid'];
  	this.pid = params['pid'];
  	this.page = this.pageServices.findPageById(this.pid).subscribe(
       (page: Page) =>
     );
  	this.name = this.page.name; 
  	this.description = this.page.descripton;
  });
 }
update() {
	this.name = this.pageForm.value.name;
	this.description = this.page.description;

	const updatedPage: page =
		_id: this.pid
		name: this.name;
		description: this.description,
		websiteId: this.wid
} 
this.pageService.updatePage(this.pid, updatePage).subscribe(
   (page: Page) => {
     this.router.navigate(['user', this.uid, 'website', 'page']);

   }
  );

 remove() {
   this.pageservice.deletePage(this.pid).subscribe(
     (page: Page[]) => {
       this.router.navigate(['user', this.uid, 'website', this.wid, 'page'])
     }
    );
 }

} 

