console.log("local storage demo file");
	
var checkForItems = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

	
	if(localStorage.getItem('YOURITEM')){
		// if item exists: 
		
		// convert item?

		// apply item data to site: 
		

	}
}


var saveUserInfo = function(){

	document.getElementById("myDiv").addEventListener('click', function(){

		// save or overwrite item: 
		localStorage.setItem('YOURITEM', "YOUR DATA"); 

		// update site:

	})


}


// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info    
});

