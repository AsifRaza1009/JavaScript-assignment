
// Shrinking Guest List: 
// You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, 
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

let guest = [ "Umer","Khurram","Hamza","Azam"]
console.log( " First list who invitie on dinner = ", guest)
for (let i = 0; i <guest.length;i++ ){ console.log('"Hello"' , guest[i] , '"would you like to accept my inivitation of Dinner"')}
console.log("----------------------------------------------------")

const missing= guest.splice(1,1," Asif")
console.log("Person who missed the dinner = " , missing)
console.log( " modifiy list who invitie on dinner = ", guest)
for (let i = 0; i <guest.length;i++ ){ console.log('"Hello"' , guest[i] , '"would you like to accept my inivitation of Dinner"')}
console.log("----------------------------------------------------")

guest.unshift(" Faisal")
console.log(guest)
guest.splice(2,0,"Irfan","Zaheer","Adnan","Shrafat")
console.log(guest)
guest.push("Sadaqat ")
console.log(guest)
console.log("List of a bigger dinner = ",guest )
for (let i = 0; i <guest.length;i++ ){ console.log('"Hello"' , guest[i] , '"would you like to accept my inivitation of Dinner"')}
 console.log("----------------------------------------------------")

 console.log(" Ohh, i can invite only two person at diiner now")
const firstPerson= guest.pop()
console.log(" Sorry i can't invite you to dinner ", firstPerson)
const secper=guest.pop()
console.log(" Sorry i can't invite you to dinner ", secper)
const thrper=guest.pop()
console.log(" Sorry i can't invite you to dinner ", thrper)
const fourthper = guest.pop()
console.log(" Sorry i can't invite you to dinner ", fourthper)
const fifthper= guest.pop()
console.log(" Sorry i can't invite you to dinner ", fifthper)
let sixper=guest.pop()
console.log(" Sorry i can't invite you to dinner ", sixper)
let sevnper=guest.pop()
console.log(" Sorry i can't invite you to dinner ", sevnper)
let eighper= guest.pop()
console.log(" Sorry i can't invite you to dinner ", eighper)
console.log("----------------------------------------------------")
console.log(guest)
console.log("----------------------------------------------------")
for (let i = 0; i <guest.length;i++ ){ console.log('"Hello"' , guest[i] , " you’re still invited.")}
console.log("----------------------------------------------------")
guest.splice(0,2)
console.log(guest)
console.log("----------------------------------------------------")