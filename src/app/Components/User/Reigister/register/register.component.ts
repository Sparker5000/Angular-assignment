import { Component, OnInit } from '@angular/core';
import { ngForm } from '@angular/forms'
import { UserService } from '../../../services/user.service.client'
import { User } from '../../../models/user.model.client'
import { Router } from '@angular/router'
import {RegisterComponent} from "./components/user/register/register.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 @ViewChild('f') registerForm: NgForm;

  username: string;
  passwrord: string;
  verifyPassword: string;
  passwordError: boolean;
  usernameError: boolean;

   constructor(private userservice: Userservice, private router: Router) { }

  ngOnInit() {
    this.passwordError = false;
    this.usernameError = false;
      }



  register(){
  	this.username = this.registerForm.value.username;
  	this.password = this.registerForm.value.password; 
    this.verifyPassword = this.registerForm.value.verifyPassword;
 

    if(this.password !== this.verifypassword) {
         }
      this.passwordError  = true; 
 }  else {
       this.passwordError= false;
       this.userService.findUserByUsername(this.username).subscribe(
         (user: User) => {
           this.usernameError = true;
         },
         (error: any) => {   
            this.userservice.createUser(newUser)
              const newuser: User = {
              _id: "",
              username: this.username,  
              password: this.password,               
              firstName: "",
              lastName: "",
              email: "",
             };
             this.userservice.creatruser(newUser).subscribe(
               (user: User) => {
                  var id: string =   this.userService.findUserByUsername(this.username)._id
                  this.router.navigate(['user,id']);
               },

            )

       }

     )      
         


   // if(this.password !== this.verifyPassword) {
         this.passwordError = true;
       } else {
       	   this.passwordError = false;
       	 const user: User = this.userservice.findUswerByusername(this.username)
       	 if(user){
       	 	 this.usernameError = true;
       	 } else {
       	 	 this.usernameError = false;
       	 	 this.passwordError = false;
       	 	const newuser: User = 
       	 		_id: "",
       	 		username: this.username,  
            password: this.password,        	 		
       	 		firstName: "",
       	 		lastName: "",
       	 		email: "",
             };
             this.userservice.createUser(newUser).suscribe()
               (user: User) => {
                 var id: string = this.userservice.findUserByUsername(this.username)._id
                 this.router.navigate(['user', id]); 

               },
               (error: Error) => {

                 this.usernameError = true;

               },
               
             var id = this.userService.findByUsername(this.username) 
             this.router.navigate(['/user/' , id]);

       	 	
       	 }	 

       	 }
       }  


      }
   
