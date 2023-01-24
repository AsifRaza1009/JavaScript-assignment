/*

City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function city_country(city , country){ return ` ${city} and ${country}`}

let firstPair = city_country("Lahore","Pakistan")
console.log(firstPair)
let secondPair = city_country("Abu Dhabi","UAE")
console.log(secondPair)

let thirdPair = city_country("New Yark","USA")
console.log(thirdPair)
