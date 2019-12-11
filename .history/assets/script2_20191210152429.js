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

	if(localStorage.getItem("count")){
		count = parseInt(localStorage.getItem("count"));
	
		// update the css of the stone for wherever it was left off
	
	}
	
	if(localStorage.getItem("size")){
		var size = localStorage.getItem("size");
		size = parseInt(size);
	
		// update the css of the stone for wherever it was left off
		document.getElementById("root").style.height= `${size}px`;
		document.getElementById("root").style.width= `${size}px`;
	}

	if(localStorage.getItem("borderRadius")){
		var borderRadius = parseInt(localStorage.getItem("borderRadius"));
		console.log("yes border");
		// update the css of the stone for wherever it was left off
		document.getElementById("root").style.borderRadius= `${borderRadius}%`;
	}
	
}

var goingup = true;
var greenGoingup = true;
var blueGoingup = true;

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
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info   
	stoneInteraction();
});



var red, blue, green, borderRadius;

//here: 
// update count variable based off of localstorage item



var count = 0;
count = parseInt(count);


var stoneInteraction = function(){

	var myDiv = document.getElementById("root");
	console.log(myDiv);
	
	myDiv.addEventListener("mouseenter", function(){
		
		count++;
		localStorage.setItem('count', count);
		console.log("count:", count);

	if(count > 10 && count <= 100){
		document.getElementById("root").addEventListener('mousemove', function(){
				var currentColor = document.getElementById("root").style.backgroundColor;
				currentColor = currentColor.substring(4, currentColor.length-1)
				 .replace(/ /g, '')
				 .split(',');
		
				// console.log("current color:", currentColor);
				
				var red = currentColor[0];
				red = parseInt(red);
				// console.log("red value:", red);
				var green = currentColor[1];
				green = parseInt(green);
				// console.log ("green value:", green);
				var blue = currentColor[2];
				blue = parseInt(blue);
		
		
				//var newRed = red + 1;
				var newGreen = green - 2;
				var newBlue = blue + 1;
		
				
		
				if(goingup === true){
					newRed = red + 2;
					// console.log("going up", newRed)
					if(red >= 255){
						goingup = false
					}
				}else{
					newRed = red - 2;
					// console.log("going down", newRed)
					if(red <= 0){
						goingup = true;
					}
				}
		
		
				if(greenGoingup === true){
					newGreen = green + 6;
					// console.log("going up", newRed)
					if(green >= 255){
						greenGoingup = false
					}
				}else{
					newGreen = green - 6 ;
					// console.log("going down", newRed)
					if(green<= 0){
						greenGoingup = true;
					}
				}
		
		
		
				if(blueGoingup === true){
					newGreen = blue + 9;
					// console.log("going up", newRed)
					if(blue >= 255){
						blueGoingup = false
					}
				}else{
					newBlue = blue - 9;
					// console.log("going down", newRed)
					if(blue <= 0){
						blueGoingup = true;
					}
				}
		
				var newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`
		
				
				// save or overwrite item: 
				localStorage.setItem('background', newColor); 
		
		
				// update site:
				document.getElementById("root").style.backgroundColor= newColor; 
			
		}else if (count > 100 && count <= 400){
			myDiv.addEventListener("mouseover", function(){
				var currentSize = myDiv.offsetWidth;
				currentSize = parseInt(currentSize);
				console.log("current size:", currentSize);


				var newSize = currentSize - .5; 
				console.log("NEW size:", newSize)
				// save or overwrite item: 
				localStorage.setItem('size', newSize); 
		
				// update site:
				myDiv.style.height= `${newSize}px`;
				myDiv.style.width= `${newSize}px`;
			})	
		}
		}else if (count >= 100 && count < 800){
			localStorage.setItem('size', 500);
			var newBorderRadius =(count/100)*5+"%";
			console.log("border radius:", myDiv.style.borderRadius);
			localStorage.setItem('borderRadius', newBorderRadius);
			myDiv.style.borderRadius= newBorderRadius;

		}else if(count >= 800 && count < 1000){
			localStorage.setItem('borderRadius',50);
			var currentWidth = myDiv.offsetWidth;
			var newWidth = currentWidth + count;
			myDiv.style.width = `${newWidth}`;
			localStorage.setItem('width',newWidth);
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
}