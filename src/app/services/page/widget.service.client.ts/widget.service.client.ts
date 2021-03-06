import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() { }
 widgets = [
{ _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
  { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://lorempixel.com/400/200/"},
  { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
  { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
  { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
];



createWidget(pageId : string, widget) {
    widget._id = Math.floor(Math.random() * Math.floor(10000)).toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget; 
}

findWidgetsByPageId(pagetId){
    var result = [];
    for(var i=0;i<this.widgets.length;i++)
    	if(this.widgets[i].pageId === pageId){
    		result.push(this.widgets[i]);

    	}
 }
}  

 findWidgetById(widgetId) {
 	for(var i=0;i<this.widgets.length;i++){
 		if(this.widgets[i].pageId === pageId){
 			return this.widgets[i];

 		}

     } 
 }
updateWidget(widgetId, widget){ 
    const oldwidget = this.findWidgetById(widgetId);
    const index = this.widgets.indexOf(oldwidget);


    this.widgets[index].size = widget.size;
    this.widgets[index].text = widget.text;
    this.widgets[index].width = widget.width;
    this.widgets[index].url = widget.url;

}

deleteWidget(widgetId)
    const oldwidget = this.findWidgetById(widgetId);
    const index = this.widgets.indexOf(oldwidget);
    this.widgets.splice(index, 1);



}
