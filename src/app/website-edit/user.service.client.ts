import { Injectable } from '@angular/core';
import {user} from '../models/user.model.client';
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { enviorment } from '../../enviorments/enviorment'
@Injectable()

export class UserService {

  baseUrl = enviorment.baseurl;

  constructor(private http: Http) { }

users: User [] = [
  {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
  {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
  {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
  {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	];

  createUser(user: User) {
    user._id = Math.random();
    this.users.push(user);
    return user;
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).pipe(map(
      (response: Response) => {
        return response.json();
      }
     ))
    ]
  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) 
        {  return this.users[x]; }
    }
  }

  findUserByUsername(username: string) { 
   for(let x = o; x < this.users.length; x++) {
      if(this.users[x].username === username)  {
        return this.users[x];


        return this.users.find(function(user: User) {
          retrurn user.username === username;

        })
      }

      }
   }

  findUserByCredentials(username: String, password: string) {
    const url = this.baseUrl + /api/user?username='+ username + '&password=' + password
    return this.http.get(url)
    (response: Response) => {
      return response.json();
      }
    })
   }
 
  updateUser(userId: String, user: User) {
    var olduser = this.findUserById(userId);
    var index = this.users.indexOf(oldUser);

    this.users[index].username = user.username;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].firstName = user.firstName;
    this.users[index].email = user.email; 
    console.log(user)   
  }
   


 function deleteUser(userId: String) { 
     var olduser = this.findUserById(userId);
     var index = this.users.indexOf(oldUser);
     this.users.splice(index, 1);
  }
}
