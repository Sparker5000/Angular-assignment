import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../models/widget.model.client'
import { Widgetservice } from '../../../services/widget.service.client'
import { ActivateRoute } from "@angular/router"


@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  constructor(private widgetSevice: WidgetService, private activateRoute: ActivateRoute) { }

  widget: Widget;
  wid: string;


  ngOnInit() {
  	this.activateRoute.params.subscribe(params =>)
  	   this.wgid = params['wgid'];
  	   this.widgetSevice.findWidgetById(this.wgid).subscribe(
         (widget: Widget) => {
           this.widget = widget;
         }
       ); 

  })

 }


}