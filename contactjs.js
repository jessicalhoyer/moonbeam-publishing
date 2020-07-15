// check that form is filled out completely with submit button
function checkForm() {

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var emailAddress = document.getElementById("emailAddress").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	
	if (firstName == "" || lastName == "" || emailAddress == "" || subject == "" || message == "") {
		alert("Error: Please fill out all fields!");
	}
	else {
		alert("Thank you for your email!");
	}
}

// reset form with reset button
function resetForm() {
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("emailAddress").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("message").value = "";
}

// add event listeners to submit and reset buttons
// make backwards compatible with IE
var submitButton = document.getElementById("submit");
if (submitButton.addEventListener) {
	submitButton.addEventListener("click", checkForm, false);
}
else if (submitButton.attachEvent) {
	submitButton.attachEvent("onclick", checkForm);
}
	
	
var resetButton = document.getElementById("reset");
if (resetButton.addEventListener) {
	resetButton.addEventListener("click", resetForm, false);
}
else if (resetButton.attachEvent) {
	resetButton.attachEvent("onclick", resetForm);
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	