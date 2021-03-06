import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import{UserService} from'../../../services/user.service.client'
import { User } from '../../../models/user.model.client'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@ViewChild('f') loginForm: NgForm;


	username: string;
	password: string;
  errorflag: boolean;
  // userService: UserService;
  //router: Router;

    constructor(private userServicwe: UserService, private router: Router ) {

 
    })
  }

  login(){
  	console.log(this.loginForm.value.username);
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password; 

    this.userService.findUserByCredentals(this.username, this.password).subscribe(
      (user: User) => {
        this.errorFlag = false;
        this.router.navigate(['user', user._id]);
       ],

      (error: any) =>
      ) this.errorFlag = true;
      }
     ) 

    }
   
      
    
    }

   

