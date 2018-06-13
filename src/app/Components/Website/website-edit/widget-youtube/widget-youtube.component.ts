import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../models/widget.model.client'
import { Widgetservice } from '../../../services/widget.service.client'
import { ActivateRoute } from "@angular/router"

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

	@ViewChild('f') widgetform: NgForm;

	uid: string;
	wid; string;
	pid; string;
	widget: Widget;

  constructor(private widgetService: WidgetService, private activated) { }

  ngOnInit() {
  	this.activateRoute.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];
  		this.wgid = this.widgetservice.findwidgetgetById(this.wgid);
        });
  	remove() {
   	this.widgetService.deleteWidget(this.wgid);
   	this.router.navigate(['user', this.uid, 'website', this.wid 'page', this.pid])
	

}

    update() {
    this.name = this.widgetform.value.name;
      this.text = this.widgetForm.value.text;
      this.url = this..url;
      this.width = this.widget/form.value.width;

      const updateWidget: Widget = {
      	_id: this.wgid,
      	name: this.name,
      	text: this.text,
      	url: this.url,
      	width: this.width,
      	pageId: this.pid,
      	widgetType: this.widget.widgetType

      }
      this.widgetService.updatewidgetService(this.wgid, uodatedWidget);
      this.router.navigate(['user', this.uid], 'website',)this.wid,
      'page', this.pid);
    }

  }  
