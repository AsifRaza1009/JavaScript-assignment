

// Checking Usernames: 
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let currentusers =['John','Asif','Asif_123','Kashif','Kashif_123','Faisal']

let newUser = ['Asif','Raza123','John','Raza_123','ABC_123']

// for( let i = 0; i < newUser.length;i++){ if(newUser[i] === 'Asif'){ console.log(newUser[i] , "=  The New User name is already used, Need the enter a new name")}
// else if ( newUser[i] === 'John'){ console.log(newUser[i] ," = the New User name is already used, Need the enter a new name")}
// else{ console.log(newUser[i] ,"=  This is the new User name, user name is available")}}
// console.log('=======================================================================================')
for(let i=0 ; i < newUser.length;i++){ if ( currentusers.includes(newUser[i])){ console.log(`The user name " ${newUser[i]} " is already been used , you need to slect a new user name`)}
else ( console.log(`The User name" ${newUser[i]} " is accepted.`))}
