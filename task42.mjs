/*
	Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() 
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/

let magician = ['Ahad','Nasir','Faisal','Majid',]

function make_great(magician)
{for( let i = 0; i <magician.length;i++){ console.log(`The Great ${magician[i]}`)}}

function show_magicians(name){ console.log(" Magician in array")
for(let i = 0; i <magician.length;i++){ console.log( `The Great ${magician[i]}`)}}

show_magicians(magician)
make_great(magician)