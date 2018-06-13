import { NgForm } from '@angular/forms';





2Component({
	selector: 'app-widget-header',
	templateUrl: './widget-header.component.html',
	styleUrls: ['./widget-header.component.css']	
})
export class WidgetHeaderComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;

  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widgey: Widget;
  name: string;
  text: string;
  size: number;


  constructor(private widgetService: WidgetService, private activi);

  ngOnInit() {
  	this.uid = params['uid'];
  	this.wid = params['wid'];
  	this.pid = params['pid'];
  	this.wgid = params['wgid'];
    this.widgetService.findWidgetById(this.wgid).suscribe(
      (widget: Widget) => {
      	this.widget = widget;
      }
   ); 	
  );
}
   update(){
   	this.name = this.widgetform.value.name;
   	this.text = this.widgetform.value.text;
   	this.size = this.widgetForm.value.size;

   	const updateWidget: Widget = {
   		_id: this.wgid,
   		name: this.name;
   		widgetType: this.widget.widgetType,
   		pageId:this.pid,
   		size: this.size,
   		text: this.text, 
   	}
   	this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(
          (widget: Widget) => {   		   		
          }
   	this.router.navigate(['user', this.uid, 'website', this.wid,'page',this.pid])
   );

   }

   remove(){
   	this.widgetService.deleteWidget(this.wgid).subscribe(
        (widgets: Widget[]) =>
    	   	this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid])
        }
     ); 
   }
   
}