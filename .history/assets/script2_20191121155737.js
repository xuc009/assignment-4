console.log("local storage demo file");
	
var checkForItems = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

	
	if(localStorage.getItem('background')){
		// if item exists: 
		console.log("yes!")
		var newColor = localStorage.getItem('background');
		// convert item?

		// apply item data to site: 
		document.getElementById("root").style.backgroundColor=

	}
	else{
		console.log("no");
	}
}


var saveUserInfo = function(){

	document.getElementById("root").addEventListener('click', function(){
		var currentColor = document.getElementById("root").style.backgroundColor;
		console.log("current color:", currentColor);

		var red = Math.round(Math.random()*255);
		var green = Math.round(Math.random()*255);
		var blue = Math.round(Math.random()*255);

		var newColor = "rgb(" + red + "," + green + "," + blue + ")";

		// var newColor = currentColor + some amount
		newColor = "red"
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

