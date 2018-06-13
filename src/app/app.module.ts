import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Http, Response} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from '/components/user/login/login.component';
import { RegisterComponent } from '././components/User/reigister/register/register.component';
import { ProfileComponent } from '././components/User/profile/profile.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './Components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './Components/website/website-list/website-list.component';
import { PageListComponent } from './Components/page/page-list/page-list.component'; 
import { PageEditComponent } from './Components/page/page-edit/page-edit.component';
import { PageNewComponent } from './Components/page/page-new/page-new.component';
import { WidgetChooserComponent } from './Components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './Components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './Components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './Components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './Components/Widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './Components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { PageNewComponent } from './Components/page/page-new/page-new.component';



import { Routing } from './app.routing';

import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client;


@NgModule({
  declarations: [
    AppComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule

  ],
  providers:  [UserService, WebsiteService, PageService, WidgetService],

  bootstrap: [AppComponent]
})
export class AppModule { }
