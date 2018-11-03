function validateForm() {
	alert("Submitted");
	return false;
	
}//end function validateForm


function validate() {
	var isValid = true;
	
	//get email
	var email = document.getElementsByName("Email").value;
	
	if(validateEmail(Email) == False) {
		alert("This is not valid email");
		return false;
	}//end if
	
	return isValid;
}//end function validate (Email)

function validateEmail(Email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(Email);
}//end function validateEmail