console.log("local storage demo file");
	
var checkForItems = function(){
	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

	
	if(localStorage.getItem('circle')){
		// if item exists: 
		console.log("yes")
		var circlesizelarge = localStorage.getItem('circle');
		circlesizelarge = parseInt(circlesizelarge);
		console.log (circlesizelarge);

		var circlesizesmall = localStorage.getItem('circle');
		circlesizesmall = parseInt(circlesizesmall);
		console.log (circlesizesmall);

		// convert item?

		// apply item data to site: 
		document.getElementById("circle").style.height = `${circlesizelarge}px`;
		document.getElementById("circle").style.width = `${circlesizelarge}px`;

		document.getElementById("circle").style.height = `${circlesizesmall}px`;
		document.getElementById("circle").style.width = `${circlesizesmall}px`;

	}
	else{
		console.log("no")
	}
}


var saveUserInfo = function(){

	document.getElementById("bigger").addEventListener('click', function(){
		var currentSize = document.getElementById('circle').offsetWidth;
		currentSize = parseInt(currentSize);
		console.log("current size:", currentSize);
		var circlesizelarge = currentSize + 10; 
		// save or overwrite item: 
		localStorage.setItem('circle', circlesizelarge); 

		// update site:
		document.getElementById("circle").style.height= `${circlesizelarge}px`;
		document.getElementById("circle").style.width= `${circlesizelarge}px`;

	})

	document.getElementById("smaller").addEventListener('click', function(){
		var currentSize = document.getElementById('circle').offsetWidth;
		currentSize = parseInt(currentSize);
		console.log("current size:", currentSize);
		var circlesizesmall = currentSize - 10; 
		// save or overwrite item: 
		localStorage.setItem('circle', circlesizesmall); 

		// update site:
		document.getElementById("circle").style.height= `${circlesizesmall}px`;
		document.getElementById("circle").style.width= `${circlesizesmall}px`;

	})


}


// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info    
});

