

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let modeOfTransportation = [ "Bicycle","Motocycle","Car","Bus","Train","Airoplane"]
let statements = [ "I would like to my own", "When ever i have to travel"]

// First method

console.log("I would like to have my own", modeOfTransportation[0] , "When ever i have to travel a small distance")
console.log("I would like to have my own", modeOfTransportation[1] , "When ever i have to travel within city")
console.log("I would like to have my own", modeOfTransportation[2] , "When ever i have to travel out side the city but not to far")
console.log("I would like to have my own", modeOfTransportation[3] , "When ever i have to travel when i just want to enjoy the travelling")
console.log("I would like to have my own", modeOfTransportation[4] , "When ever i have to travel for away from my home")
console.log("I would like to have my own", modeOfTransportation[4] , "When ever i have to travel outside the country")

// Second method 
console.log(statements[0]+" " +modeOfTransportation[0]+ " " +statements[1])

// Third method 

for (let i = 0;i < modeOfTransportation.length;i++)
{ for (let j = 0 ; j < statements.length;j++)
    {console.log(statements[j]+" " +modeOfTransportation[i]) }}
