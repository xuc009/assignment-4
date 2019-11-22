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

		//magenta = 255 0 255 
		
		//cyan 
		


		var red = currentColor[0];
		red = parseInt(red);
		console.log("red value:", red);
		var green = currentColor[1];
		var blue = currentColor[2];

		var red = 0;
		var green = 255;
		var blue = 255;
		
		var newRed = red + 1;
		var newGreen = green - 2;
		var newBlue = 255;

		// reset or update values
		if (red == 255) {
			console.log("red at max");
			newRed = red - 2;
		}

		if (red < 255) {
			console.log("red increasing");
			newRed = red + 2;
		}

		// if (green == 255) {
		// 	console.log("green at max");
		// 	newGreen = 0;
		// 	var newGreen = green - 5;
		// }

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

