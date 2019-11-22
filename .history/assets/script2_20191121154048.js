console.log("local storage demo file");
	
var checkForItems = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

	
	if(localStorage.getItem('background')){
		// if item exists: 
		console.log("yes!")
		// convert item?

		// apply item data to site: 
		

	}
}


var saveUserInfo = function(){

	document.getElementById("root").addEventListener('click', function(){
		var currentColor = document.getElementById("root").style.backgroundColor;
		console.log("current color:", currentColor);
		// var newColor = currentColor + some amount
		// save or overwrite item: 
		localStorage.setItem('YOURITEM', "YOUR DATA"); 

		// update site:
		document.getElementById("root").style.backgroundColor="red"
	})


}


// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info    
});

