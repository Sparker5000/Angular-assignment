import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {Http, Response} from '@angular/http';
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component"
import { WebsiteEditComponent } from './Components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './Components/website/website-list/website-list.component';
import { WidgetChooserComponent } from './Components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './Components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './Components/widget/widget-list/widget-list.component';
import { PageNewComponent } from './Components/page/page-new/page-new.component';
import { PageEditComponent } from './Components/page/page-edit/page-edit.component';
import { PageListComponent } from './Components/page/page-list/page-list.component';


// Import all other components here 

const APP_ROUTES : Routes = [
 { path : '', component : LoginComponent},
 { path : 'login', component: LoginComponent},
 { path : 'register',component: RegisterComponent},
 { path : 'user/:uid',component:ProfileComponent},
 {path : 'user/:uid/website' , component:WebsiteListComponent},
 { path :  'user/:uid/website/:wid'  ,component: WebsiteEditComponent}, 
 { path : 'user/:uid/website/:wid/page/new', component: PageNewComponent},
 { path : 'user/:uid/website/:wid/page/:pid' , component: PageEditComponent},
 { path : 'user/:uid/website/:wid/page/:pid/widget' , component: WidgetListComponent},
 { path : 'user/:uid/website/:wid/page/:pid/widget' , component: WidgetListComponent},
 { path : 'user/;uid/website/:wid/page/:pid/widget/new' ,component: WidgetChooserComponent}, 
 { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid' , component WidgetEditComponent},
 
 


];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
