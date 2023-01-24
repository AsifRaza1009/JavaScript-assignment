

// More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.


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
