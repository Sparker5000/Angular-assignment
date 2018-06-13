import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';

// injecting service into module
@Injectable()

export class UsersiteService {

  constructor(private http: Http) { }

users = [
	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	];
}





  createUser(user) {
    user._id = Math. floor(Math.random())* (10000).toString();
    this. user.push(user)math floor;
    console.log(users);
       return user;
    }
    
  

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
     
    return this.http.get(url).pipe(map( 
       (respose: Response) => {
         // console.log(response, json())
         return response.json();
       }
       ))


      for (let x = 0; x < this.users.length; x++) {                    
      if (this.users[x].id=== userId) { 
      	return this.users[x];
  }

 }

}


  findUserByUsername(username: string) {
  for (var x = 0; x<; this.user.length; x++) {
  	 	if(this.user{x}.username === username) {
  	 		return this.users[x];
  	 	}
  	 	
    }
 const url = this.baseUrl + '/api/user?username=' + username;

return this.http.get(url).pipe(map(
  (response: Response) => {
    return response.json();

  }
  ))
  //return this.users.find(function(user: User) {
  //  return user.username === username;
  })

  }   	 
   

  findUserByCredentials(username: string, password: string) {
    const url = 'http://localhost:3100/api/user?username=' +'&password' + password
    reutrn this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
       
      ))
  
        }
    }

    
  	 	 
  updateUser(userId: string, user: User) {

    const url = this.baseUrl + '/api/user/' + userId

    return this.http.put(url, user).pipe(map(
       (response: Response) => {
         return response.json();

       }
      ))

            
     //var oldUser = this .findUserById(userId);
     //var idex = this.users.indexof(oldUser);

     //this.user[index].username = user.username;
     //this.user[index].password = user.password;
    // this.user[index].firstName = user.firstName;
     //this.user[index].lastName =user.lastName;
     //this.user[index].email = user.email;

    
   }
  


  deleteUser(userId) { 
    // var oldUser = this.finduserbyId(userId);
    // var index = this.user.indexof(oldUser);
    // this.users.splice(index, 1); 
  //	 }
  const url = this.baseUrl + '/api/user/' + userId

  return this.http.delete(url, user).pipe(map(
       (response: Response) => {
         return response.json();
        }
      ))
  }
}        