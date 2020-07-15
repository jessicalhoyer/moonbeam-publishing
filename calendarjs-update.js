// global variables

var selectedDate = document.getElementById("userDate");
var userDate;
var currentDate;
var dateDifference;

// retrieve and convert dates
function convertDates() {
	
	// get date user entered and display it
	userDate = new Date(selectedDate.value);
	userDate.setUTCHours(12);
	document.getElementById("dateEntered").innerHTML = userDate.toDateString();
	
	// get current date and display it
	currentDate = new Date();
	//currentDate.setUTCHours(12);
	document.getElementById("currentDate").innerHTML = currentDate.toDateString();
	
	// calculate the difference between the two dates
	var userDateMilli = userDate.getTime(userDate);
	var currentDateMilli = currentDate.getTime(currentDate);
	dateDifference = currentDateMilli - userDateMilli;
	//dateDifference = userDateMilli - currentDateMilli;
	
	var days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
	var years = Math.floor(days / 365);
	var months = Math.floor((days - (years * 365)) / 31);
	var daysLeft = Math.floor(days / ((years * 365) + (months * 31)));
	
	/* var secs = Math.floor(dateDifference / 1000);
    var mins = Math.floor(secs / 60);
    var hours = Math.floor(mins /60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);
    months = Math.floor(months % 12);
    days = Math.floor(days % 31);
    hours = Math.floor(hours % 24);
    mins = Math.floor(mins % 60);
    secs = Math.floor(secs % 60); */
	
	// display difference between the dates
	document.getElementById("dateDiff").innerHTML = years + " years, " + months + " months, and " + daysLeft + " days";
}

// clear values when reset button is clicked
function resetForm() {
	document.getElementById("userDate").value = "";
	document.getElementById("dateEntered").innerHTML = "";
	document.getElementById("currentDate").innerHTML = "";
	document.getElementById("dateDiff").innerHTML = "";
}

// create event listeners
function createEventListeners() {
	document.getElementById("submit").addEventListener("click", convertDates, false);
	document.getElementById("reset").addEventListener("click", resetForm, false);
	
	// clear values when page is reloaded
	document.getElementById("userDate").value = "";
	document.getElementById("dateEntered").innerHTML = "";
	document.getElementById("currentDate").innerHTML = "";
	document.getElementById("dateDiff").innerHTML = "";
}

window.addEventListener("load", createEventListeners, false);