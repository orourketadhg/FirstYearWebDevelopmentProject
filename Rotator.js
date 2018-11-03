var pict_array = ["Image_Rotate_2_1.jpg","Image_Rotate_1_1.jpg","Image_Rotate_3_1.jpg"];
var counter = 0;

function rotatePict() {
	document.getElementById("Rotate").src = ("Assets/Images/" + pict_array[counter]);
	counter++;
	
	setTimeout(rotatePict, 5000);
	
	if (counter == pict_array.length ) {
		counter = 0;
		
	}//end reset if
	
}//end function