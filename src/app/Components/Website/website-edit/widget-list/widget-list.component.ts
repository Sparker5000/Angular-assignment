import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

	uid: string;
	wid: string;
	pid: string;
	widgets: Widget[];

  constructor(private widgetService: WidgetService, private,activa ) { }

  ngOnInit() {
   this.uid = params['uid'];
   this.wid = params['wid'];
   this.pid = params['pid'];
   this.widgetService.findWidegtsbypageId(this.page).subscribe(); 
        (widgets: Widget[]) => {
        	this.widgets = widgets;
        }
     );   
    }) 
 }       	
      



getYoutubeUrl(url){
	let emedUrl = "https:/www.youyube.com/embed";
	const parseurl = url.split('/');
	//tranfer viodeo url into enbed vidoe url
	embedUrl += parseUrl[parsedUrl.length -1];

	// telling browser this src is safe
	return this.sanitizer.bypasssecurityTrustResourseUrl(embedUrl);

}

}