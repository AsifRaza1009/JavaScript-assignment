import PromptSync from "prompt-sync"
var prompt= PromptSync()

// 	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color= prompt(" what is the color of alien")
if ( alien_color == "green"){ console.log("when alien color is green = ' player earned 5 points'")}
else if( alien_color == " yellow") { console.log("when alien color is yellow = ' player earned 10 points'")}
else if ( alien_color == " red"){ console.log("when alien color is red = ' player earned 15 points'")}
else{ console.log("Remaing all color =  'player earned 10 points'")}