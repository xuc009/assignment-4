console.log("local storage demo file");
	
var checkForItems = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

	
	if(localStorage.getItem('background')){
		// if item exists: 
		console.log("yes!")
		var newColor = localStorage.getItem('background');
		// convert item?

		// apply item data to site: 
		document.getElementById("root").style.backgroundColor = newColor;

	}
	else{
		console.log("no");
	}
}


var saveUserInfo = function(){

	document.getElementById("root").addEventListener('mouseenter', function(){
		var currentColor = document.getElementById("root").style.backgroundColor;
		currentColor = currentColor.substring(4, currentColor.length-1)
         .replace(/ /g, '')
         .split(',');

		console.log("current color:", currentColor);
		
		// // var red = currentColor[0];
		// red = parseInt(red);
		// // console.log("red value:", red);
		// // var green = currentColor[1];
		// // var blue = currentColor[2];

		var newRed = red + 5;
		var newGreen = green + 5;
		var newBlue = blue + 5;

		var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`

		// var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`
		// save or overwrite item: 
		localStorage.setItem('background', newColor); 

		// update site:
		document.getElementById("root").style.backgroundColor= newColor; 
	})


}


// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info    
});

