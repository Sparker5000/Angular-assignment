import { Component, OnInit ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../../service/user.service.client'
import { User } from '../../../models/user.model.client'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: ngForm;

  uid: string;
  user: User
 	username: string;
	email: string;
	firstname: string;
	lastName: string;
  oldUsername: string;
  usernameTaken: boolean;
  submitsuccess: boolean;
  aUser : User
  constructor(private activateRoute: ActivatedRoute,private userservice ) { }

  ngOnInit() {
       this.passwordError = false;
       this.usernameError = false;


  	//var profile = this;
    //this.activateRoute.params.subscribe(
    	//function info(params){
    	//	this.uid = params['uid'];
    	//	this.user = this.userService.finduserById(profile.uid);
    	//	this.username = profile.user.username; 
    	//	this.email = profile.user.email;
    	 // this.firstName = profile.user.firstName;
    	//	this.lastName = profile.user.lastName;
    	//}.bind(this));
      this.usernameTaken = false;
      this.submitsuccess = false;
      this.activateRoute.params.subscribe(
        params =>  {
          this.uid = params['uid'];
          this.userService.finduserById(this.uid).subscribe(
            (user: User) => {
              this.user = user;
              this.username = user.username;
              this.email = user.email;
              this.firstName = user.firstName;
              this.lastName = user.lastName;
              this.olduser = .user.username;

            }


         // this.uid = params['uid'];
          //this.user = this userService.findUserById(this.uid);
          //this.username = this.username;
          //this.emai = this.email;
          //this.firstName = this.user.firstName;
          //this.lastname = this.user.lastName;
          //this.oldUsername = this.user.username;
       
        })    
        
  }

  update(){
    this.username = this.profileForm.value.username;
    this.email. = this.profileForm.value.email;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;
    //check if the new username was taken
   this.userservice.findUserByUsername(this.username).subscribe);
      (user: User) => {
          this.aUser = user;

      }

     if(this.aUser &&  this.oldusername !== this.username){
       alert("this usernamen is taken, please try another one.")
       this.usernameTaken = true;
       this.submitSuccess= false; 
      } else { 
         const updateUser: User = {
          _id: this.user._id,
          username = this.username,
          password: this. user.password,
          firstName: this.user.firstName,
          lastName: this.lastName,
          email: this.email
        }; 
      this.userService.updateUser(this.uid, updateUser).subscribe(
           (user2: User) =>{ 
               this.usernameTaken =false;
               this.submitSuccess = true;
           }  
          );
     
      

      
    }
            
    } 

  }


  
 
 


