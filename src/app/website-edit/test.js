users = [
	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	];

 
 


  function createUser(user){

  user._id = Math.floor(Math.random() * Math.random(10000));
  	this.users.push(user);
  	console.log(users);
  	return user;
  }

var newuser = {
	username: "admin" ,
	password: "password"
	firstName: "admin"
	lastName: "wang"
	email:    "admin@gmail.com"
}


  console.log(createUser(newUser));
