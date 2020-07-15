// global variables
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var phoneNum = document.getElementById("phoneNum");
	var emailAddress = document.getElementById("emailAddress");
	var regEvent = document.getElementById("regEvent");
	var regOption = document.getElementsByName("regOption");
	var attending = document.getElementsByName("regOption")[0];
	var volunteering = document.getElementsByName("regOption")[1];
	
	var errorMsgText = document.getElementById("errorMsgText");
	var errorMsgPhone = document.getElementById("errorMsgPhone");
	var errorMsgEvent = document.getElementById("errorMsgEvent");
	var errorMsgOption = document.getElementById("errorMsgOption");
	

// check that form is filled out completely by clicking submit button
function checkForm() {

	var error = false;
	
	// check if text fields are blank
	if (firstName.value == "" || lastName.value == "" || emailAddress.value == "" || phoneNum.value == "") {
		errorMsgText.innerHTML = "Please fill out all text fields.";
		error = true;
	} else {
		errorMsgText.innerHTML = "";
	}
	
	// check if phone number is, in fact, a number
	if (Number.isNaN(phoneNum.value) === true) {
		errorMsgPhone.innerHTML = "Please put in a valid phone number.";
		error = true;
	} else {
		errorMsgPhone.innerHTML = "";
	}
	
	// check if event selection list is selected
	if (document.getElementById("regEvent").selectedIndex === -1) {
		errorMsgEvent.innerHTML = "Please select an event.";
		error = true;
	} else {
		errorMsgEvent.innerHTML = "";
	}
	
	// check if attending/volunteering is selected
	if (!regOption[0].checked && !regOption[1].checked) {
		errorMsgOption.innerHTML = "Please select whether you are attending or volunteering.";
		error = true;
	} else {
		errorMsgOption.innerHTML = "";
	}
	
	if (error === false) {
		window.alert("Thank you for signing up!\nWe will send you a confirmation email shortly.");
		errorMsgText.innerHTML = "";
		errorMsgEvent.innerHTML = "";
		errorMsgOption.innerHTML = "";
	}
	
}

// display different forms depending on registration options
function displayRegOption() {
	
}

// make the selection list blank by default
function removeSelectionDefaults() {
	var emptyBoxes = document.getElementsByTagName("select");
	for (var i = 0; i < emptyBoxes.length ; i++) {
		emptyBoxes[i].selectedIndex = -1;
	}
}

// reset form with reset button
function resetForm() {
	firstName.value = "";
	lastName.value = "";
	phoneNum.value = "";
	emailAddress.value = "";
	regEvent.value = "none";
	
	errorMsgText.innerHTML = "";
	errorMsgEvent.innerHTML = "";
	errorMsgOption.innerHTML = "";
	
	attending.checked = false;
	volunteering.checked = false;
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

window.addEventListener("load", removeSelectionDefaults, false);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	