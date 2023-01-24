
/*
	Album:
 Write a function called make_album() that builds a Object describing a music album. 
 The function should take in an artist name and an album title, 
 and it should return a Object containing these two pieces of information. 
 Use the function to make three dictionaries representing different albums. 
 Print each return value to show that Objects are storing the album information correctly. 
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
 If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album.
*/

function make_album(artistname,titleofalubum, numberoftrack){if(numberoftrack){
    let album ={ nameofartist: artistname,titleofalubum: titleofalubum,numberoftrack:numberoftrack};
    return album;}
    else {let album = { nameofartist:artistname,titleofalubum:titleofalubum}
return album }

}

let artist1 = make_album("nusrtat fathe ali khan","Raag",10)
console.log(artist1)
let artist2 = make_album("arjeet","Tum",)
console.log(artist2)
let artist3 = make_album("Atif Aslam","Dil Diya")
console.log(artist3)
let artist = make_album("Ghulam Ali","Rog",18)
console.log(artist)