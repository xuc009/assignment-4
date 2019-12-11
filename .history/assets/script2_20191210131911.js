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

var goingup = true;

var saveUserInfo = function(){

	document.getElementById("root").addEventListener('mouseover', function(){
		var currentColor = document.getElementById("root").style.backgroundColor;
		currentColor = currentColor.substring(4, currentColor.length-1)
         .replace(/ /g, '')
         .split(',');

		console.log("current color:", currentColor);
		
		var red = currentColor[0];
		red = parseInt(red);

		var green = currentColor[1];
		green = parseInt(green);

		var blue = currentColor[2];
		blue = parseInt(blue);


		var newRed = red + 2;
		var newGreen = green - 1;
		var newBlue = blue + 1;


		//RED

		if(goingup === true){
			newRed = red + 2;
			console.log("going up", newRed)
			if(red >= 255){
				goingup = false
			}
		}else{
			newRed = red - 2;
			console.log("going down", newRed)
			if(red <= 0){
				goingup = true;
			}
		}

		//BLUE

		if(goingup === true){
			newBlue = blue + 2;
			console.log("going up", newRed)
			if(blue >= 255){
				goingup = false
			}
		}else{
			newBlue = red - 2;
			console.log("going down", newRed)
			if(blue <= 0){
				goingup = true;
			}
		}

		//GREEN
		
		if(goingup === true){
			newBlue = blue + 2;
			console.log("going up", newRed)
			if(blue >= 255){
				goingup = false
			}
		}else{
			newBlue = red - 2;
			console.log("going down", newRed)
			if(blue <= 0){
				goingup = true;
			}
		}

		var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`

		
		// save or overwrite item: 
		localStorage.setItem('background', newColor); 


		// update site:
		document.getElementById("root").style.backgroundColor= newColor; 
	})

	// TimeMe.initialize({
	// 	currentPageName: "my-home-page", // current page
	// 	idleTimeoutInSeconds: 30 // seconds
	// 	});

	// 	// ... Some time later ...

	// 	// Retrieve time spent on current page
	// 	var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
	// 	console.log("time:", timeSpentOnPage);
	
	// 	TimeMe.callAfterTimeElapsedInSeconds(15, function(){
	// 		console.log("The user has been actively using the page for 15 seconds! Let's prompt them with something.");

	// 		newRed=255;
	// 		newBlue=0;
	// 		newGreen=0;

	// 		var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`
	// 		localStorage.setItem('background', newColor); 
	// 		document.getElementById("root").style.backgroundColor= newColor; 
	// 	});

}


// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info    
});


// if (count > 50 && count > 100){
// 	div style = 500 x 500 px
// 	event listener makes div smaller
// }

// if count > 100{
// 	div style = 1000 x 1000 px
// 	event listener make div border radius increase
// }

// var count = 0;
// var red, blue, green, borderRadius;

//here: 
// update count variable based off of localstorage item

// if(localStorage.getItem("count")){
// 	count = parseInt(localStorage.getItem("count"));

// 	// update the css of the stone for wherever it was left off

// }

// if(localStorage.getItem("borderRadius")){
// 	borderRadius = parseInt(localStorage.getItem("borderRadius"));
// 	// update css with borderRadius:

// 	// update the css of the stone for wherever it was left off

// }


var myDiv = document.getElementById("root");
console.log(myDiv);

myDiv.addEventListener('mouseover', function(){
	
	count++;
	localStorage.setItem('count', count);
	console.log("count:", count);

	if(count > 50 && count < 100){
		// here we're updating borderradius
		// myDiv.style.borderRadius = (count - 50) + "px";
		
		myDiv.style.height = (count - 50) + "px";
		myDiv.style.width = (count - 50) + "px";


		localStorage.setItem('borderRadius', count - 50)
	}
// 	}else if(count >= 100 && count < 200){
// 		localStorage.setItem('borderRadius', 100)
// 		// then we're updating color
// 		myDiv.style.borderRadius = "100px";
// 		var blue = (count - 100)/100 * 255;
// 		myDiv.style.backgroundColor = "rgb(255,255," + blue + ")"
// 	}else if (count>200&&count< ){
// 		saveUserInfo();

// 	}



// })
});
