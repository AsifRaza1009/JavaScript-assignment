

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.

let location = [ "Naran","Dubai","Madina","Makkah","Abu Dhabi"]
console.log("Orignal Array", location)
console.log("alphabetical order without modifying the actual list." , [...location].sort())
console.log("Orignal Array",location)
console.log("Reverse alphabetical order without modifying the actual list." , [...location].reverse())
console.log("Orignal Array",location)
location.reverse()
console.log(" Now the order is reversed." , location)
location.reverse()
console.log("again come to orignal order." , location)
location.sort()
console.log("Now the Array is sorrted alphabetically " , location)
location.reverse()
console.log("Now the Array is reverse alphabetically " , location)