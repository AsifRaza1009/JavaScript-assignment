// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// console.log("******* Test 01******")
// let stng = "Hello world"
// console.log("Is stng == Hello World ? i perdict it true" )
// console.log(stng == "Hello world")
// console.log("------------------------------finish--------------------------------------------------"),

// console.log("******* Test 02******")
// let stng1 = "Hello world"
// console.log("Is stng1 == Hello World ? i perdict it false" )
// console.log(stng1 ==  "world")
// console.log("------------------------------finish--------------------------------------------------")
// console.log("******* Test 03******")
// let stng2 = "Hello world"
// console.log("Is stng2 == Hello World ? i perdict it false" )
// console.log(stng2 !== "Hello world")
// console.log("------------------------------finish--------------------------------------------------")
// console.log("******* Test 04  • Tests using the lower case function******")
// let stng3 = "hello world"
// console.log("Is stng3 == Hello World ? i perdict it true" )
// console.log(stng3 == "hello world")
// console.log(" i predict its false = " ,stng3 == "Hello World")
// console.log("------------------------------finish--------------------------------------------------")
// console.log("******* Test 05 Numerical tests involving equality and inequality******")
// let numb = 25
// console.log("Is Number == 25 ? i perdict it true" )
// console.log(numb == 25)
// console.log(" i predict its false = " ,numb !== 25)
// console.log(" i predict its false = " ,numb > 25)
// console.log(" i predict its true = " ,numb >= 25)
// console.log(" i predict its false = " ,numb < 25)
// console.log(" i predict its true = " ,numb <= 25)
// console.log("------------------------------finish--------------------------------------------------")

// console.log("******* Test 06 Tests using and and or operators******")
// let a = 20
// let b = 15 
// let numb2 = a>10 && b>10
// console.log("Is Number a>10 and b>10 ? i perdict it true" )
// console.log(numb2 == a>10 && b>10)
// let aa = 20
// let bb = 15 
// let numb3 = aa>10 && bb<10
// console.log("Is Number aa>10 and bb<10 ? i perdict it false" )
// console.log(numb3 == aa>10 && bb<10)
// let aaa = 20
// let bbb = 15 
// let numb4 = a>10 || b>10
// console.log("Is Number aaa>10 and bbb>10 ? i perdict it true" )
// console.log(numb4 == aaa>10 || bbb>10)
// let a1 = 20
// let b1 = 15 
// let numb5 = a1>10 || b1<10
// console.log("Is Number a1>10 and b1<10 ? i perdict it true" )
// console.log(numb5 == a1>10 || b1<10)
// console.log("------------------------------finish--------------------------------------------------")

console.log("******* Test 07 Test whether an item is in a array ******")

var array = ["Hello world"," Hello Pak"," Hello UAE"," Hello USA"]
console.log("Is array == Hello World ? i perdict it true" )
console.log(array.includes("Hello world"))
console.log("------------------------------finish--------------------------------------------------")
console.log("******* Test 08 Test whether an item is not in a array ******")

var array = ["Hello world"," Hello Pak"," Hello UAE"," Hello USA"]
console.log("Is array == Hello World ? i perdict it true" )
console.log(array.includes("Hello"))
console.log("------------------------------finish--------------------------------------------------")
