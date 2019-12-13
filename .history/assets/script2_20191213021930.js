console.log("local storage demo file");

var checkForItems = function () {
	if (!storageAvailable('localStorage')) { return; } // if we can use localStorage, don't return


	if (localStorage.getItem('background')) {
		// if item exists: 
		console.log("yes!")
		var newColor = localStorage.getItem('background');
		// convert item?

		// apply item data to site: 
		document.getElementById("root").style.backgroundColor = newColor;

	}
	else {
		console.log("no");
	}

	if (localStorage.getItem("count")) {
		count = parseInt(localStorage.getItem("count"));

		// update the css of the stone for wherever it was left off

	}

	if (localStorage.getItem("size")) {
		var size = localStorage.getItem("size");
		size = parseInt(size);

		// update the css of the stone for wherever it was left off
		document.getElementById("root").style.height = `${size}px`;
		document.getElementById("root").style.width = `${size}px`;
	}

	if (localStorage.getItem("width")){
		var width = parseInt(localStorage.getItem("width"));
		console.log("yes width");
		// update the css of the stone for wherever it was left off
		document.getElementById("root").style.width = `${width}px`;
	}

	if (localStorage.getItem("height")){
		var width = parseInt(localStorage.getItem("height"));
		console.log("yes height");
		// update the css of the stone for wherever it was left off
		document.getElementById("root").style.height = `${height}px`;
	}
}



// var saveUserInfo = function(){


// 	})

// 	TimeMe.initialize({
// 		currentPageName: "my-home-page", // current page
// 		idleTimeoutInSeconds: 30 // seconds
// 		});

// 		// ... Some time later ...

// 		// Retrieve time spent on current page
// 		var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
// 		console.log("time:", timeSpentOnPage);

// 		TimeMe.callAfterTimeElapsedInSeconds(15, function(){
// 			console.log("The user has been actively using the page for 15 seconds! Let's prompt them with something.");

// 			newRed=255;
// 			newBlue=0;
// 			newGreen=0;

// 			var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`
// 			localStorage.setItem('background', newColor); 
// 			document.getElementById("root").style.backgroundColor= newColor; 
// 		});

// }


// once content has been loaded

localStorage.clear();

window.addEventListener('DOMContentLoaded', function () {
	checkForItems();
	// saveUserInfo(); // run saving user info   
	stoneInteraction();
});



var red, blue, green, borderRadius;

//here: 
// update count variable based off of localstorage item



var count = 0;
count = parseInt(count);


var goingup = true;
var greenGoingup = true;
var blueGoingup = true;

var colorChange = function (){
	
	var myDiv = document.getElementById("root");

	// myDiv.addEventListener('mousemove', function () {
		var currentColor = myDiv.style.backgroundColor;
		// console.log(myDiv.style.backgroundColor);

		currentColor = currentColor.substring(4, currentColor.length - 1)
			.replace(/ /g, '')
			.split(',');

		console.log("current color:", currentColor);

		var red = currentColor[0];
		red = parseInt(red);
		var green = currentColor[1];
		green = parseInt(green);
		var blue = currentColor[2];
		blue = parseInt(blue);
		
	

		//RED
		if (goingup === true) {
			newRed = red + 2;
			// console.log("going up", newRed)
			console.log (goingup)
			if (red >= 255) {
				goingup = false
			}
		} else {
			newRed = red - 2;
			if (red <= 0) {
				goingup = true;
			}
		}
		//GREEN
		if (greenGoingup === true) {
			newGreen = green + 6;
			if (green >= 255) {
				greenGoingup = false
			}
		} else {
			newGreen = green - 6;
			if (green <= 0) {
				greenGoingup = true;
			}
		}
		//BLUE
		if (blueGoingup === true) {
			newBlue = blue + 9;
			if (blue >= 255) {
				blueGoingup = false
			}
		} else {
			newBlue = blue - 9;
			if (blue <= 0) {
				blueGoingup = true;
			}
		}

		var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`


		// save or overwrite item: 
		localStorage.setItem('background', newColor);


		// update site:
		myDiv.style.backgroundColor = newColor;

	// })

}

var decreaseWidth = function (){
	var myDiv = document.getElementById("root");
	var newWidth = myDiv.offsetWidth - (count/80) + "px";
	myDiv.style.width = `${newWidth}`;
	console.log("new --w:",newWidth);
	localStorage.setItem('width', newWidth);
}

var increaseWidth = function(){
	var myDiv = document.getElementById("root");
	var newWidth = myDiv.offsetWidth + (count/50) + "px";
	myDiv.style.width = `${newWidth}`;
	console.log("new ++w:",newWidth);
	localStorage.setItem('width', newWidth);
}

var decreaseHeight = function(){
	var myDiv = document.getElementById("root");
	var newHeight = myDiv.offsetHeight - (count/50) + "px";
	myDiv.style.height = `${newHeight}`;
	console.log("new --h:",newHeight);
	localStorage.setItem('height', newHeight);
}

var increaseHeight = function(){
	var myDiv = document.getElementById("root");
	var newHeight = myDiv.offsetHeight + (count/50) + "px";
	myDiv.style.height = `${newHeight}`;
	console.log("new ++h:",newHeight);
	localStorage.setItem('height', newHeight);
}

var decreaseDot = function(){
	var myDiv = document.getElementById("root");
	var newWidth = myDiv.offsetWidth - (count/50) + "px";
	myDiv.style.width = `${newWidth}`;
	myDiv.style.height = `${newWidth}`
	console.log("new --dot:",newWidth);
	localStorage.setItem('width', newWidth);
	localStorage.setItem('height', newWidth);
}

var increaseDot = function(){
	var myDiv = document.getElementById("root");
	var newWidth = myDiv.offsetWidth + (count/50) + "px";
	myDiv.style.width = `${newWidth}`;
	myDiv.style.height = `${newWidth}`
	console.log("new ++dot:",newWidth);
	localStorage.setItem('width', newWidth);
	localStorage.setItem('height', newWidth);
}

var stoneInteraction = function () {

	var myDiv = document.getElementById("root");

	myDiv.addEventListener("mouseover", function () {

		count++;
		localStorage.setItem('count', count);
		console.log("count:", count);

		if (count > 0 && count <= 150) {
			colorChange();
			// increaseHeight();
		}else if (count > 150 && count <= 450) {
			//increase until full bleed
			//++ h&w
			increaseDot();
					// currentSize = parseInt(myDiv.offsetWidth);
					// console.log("current size:", currentSize);

					// var newSize = currentSize + 10;
					
					// console.log("NEW size:", newSize)

					// // save or overwrite item: 
					// localStorage.setItem('size', newSize);

					// // update site:
					// myDiv.style.height = `${newSize}px`;
					// myDiv.style.width = `${newSize}px`;
		} else if (count >= 400 && count < 500){
			colorChange();
		} else if (count >= 500 && count < 550) {
			//decrease back to dot
			// -- h&w
			decreaseDot();
		} else if (count >= 550 && count < 590) {
			//lengthen and flatten until horizontal line 
			// -- h ++w
			decreaseHeight();
			increaseWidth();
		} else if (count >= 590 && count < 690){
			//shorten back until dot
			// --w
			decreaseWidth();
		} else if (count >= 690 && count < 790) {
			//lengthen to vertical line
			// ++h
			increaseHeight();
		}else if (count >= 790 && count < 850){
			colorChange();
		}else if(count >= 850 && count < 950){
			//widen until full bleed
			// ++ w
			increaseWidth();
		}else if (count >= 950 && count < 1050){
			colorChange();
		}else if (count >= 1050 && count < 1250){
			//flatten until horizontal line
			// -- h
			decreaseHeight();
		}else if(count >= 1250 && count < 1350){
			//shorten back to dot
			// --w 
			decreaseWidth();
		}
	})
}