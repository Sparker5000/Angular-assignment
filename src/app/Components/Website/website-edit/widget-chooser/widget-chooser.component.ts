import { Component, OnInit } from '@angular/core';
import{ ActivateRoute Router } from '@angular/router';
import { Widgetservice } from '../../../service/widget.service.client'
import { Widget} from '../../../models/widget.model.client'


@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

	uid: string;
	wid: string;
	pid: string;

  constructor(private activatedRoute: ActivateRoute, private widgetService: WidgetService, private router: Router ) { }

  ngOnInit() {
  	this.activatedRoute.params['uid'];
  	this.uid = params['uid'];
  	this.wid = params[wid];
  	this.pid = params[pid];

   })

  }

  createHeader(pageId){

     const newwidget: Widget = {
     	_id; '',
     	widgetType: "HEADING",
     	pageId: this.pid

     }
   this.widegtService.createWidget(this.pid, newWidget).subscribe(
     (widget: Widget) => {
        
   this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid._id]);
   }
     }
     );
     const wgid = this.widgetService.widgets[this.widgetService.widgets]

     this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid]);
    }
    );
  creaeImage(){}

   const newwidget: Widget = {
     	_id; '',
     	widgetType: "IMAGE",
     	pageId: this.pid

     }
   this.widegtService.createWidget(this.pid, newWidget);
   this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid]);
   
  createYoutube(){}
  
  const newwidget: Widget = {
     	_id; '',
     	widgetType: "YOUTUBE",
     	pageId: this.pid

     }
   this.widegtService.createWidget(this.pid, newWidget);
   this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid]);
   }

