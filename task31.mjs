
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.




let userName = ['Asif','Kashif','Faisal','Ali','Admin','Khurram','Umer']
//let userName = []

//for(let i = 0; i < userName.length;i++){ console.log("Hello",userName[i] , " welcome to our website")}

if(userName.length === 0){ console.log(' we need a user to run this')}
else{for(let i = 0; i < userName.length;i++)
{ if(userName[i] === 'Admin'){console.log("Hello 'Admin' would you like to see a status report")}
else if( userName[i]==='Asif'){ console.log("Hello Asif, You are the owner of the site" )}
else{console.log("Hello",userName[i]," Thanks you for logging in again")}}}
