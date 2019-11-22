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
		
		var red = currentColor[0];
		red = parseInt(red);
		// console.log("red value:", red);
		var green = currentColor[1];
		green = parseInt(green);
		// console.log ("green value:", green);
		var blue = currentColor[2];
		blue = parseInt(blue);

		// cyan 
			var red = 0;
			var green = 255;
			var blue = 255;

		var newRed = red + 1;
		var newGreen = green - 2;
		var newBlue = blue + 1;

		// reset or update values
		if (red == 255) {
			console.log("red at max");
			newRed = red - 2; //and all instances after
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

		
		// save or overwrite item: 
		localStorage.setItem('background', newColor); 

		// update site:
		document.getElementById("root").style.backgroundColor= newColor; 
	})

	TimeMe.initialize({
		currentPageName: "my-home-page", // current page
		idleTimeoutInSeconds: 30 // seconds
		});

		// ... Some time later ...

		// Retrieve time spent on current page
		var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
		console.log("time:", timeSpentOnPage);
	
		TimeMe.callAfterTimeElapsedInSeconds(15, function(){
			console.log("The user has been actively using the page for 15 seconds! Let's prompt them with something.");

			newRed=255;
			newBlue=0;
			newGreen=0;

			var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`
			localStorage.setItem('background', newColor); 
			document.getElementById("root").style.backgroundColor= newColor; 
		});

}


// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info    
});

