// calculate total service price

// i need to add some global variables here and rewrite this
  
function calcTotal() {
	
	var total = 0;
	
	var manuService = document.getElementById("manuService").value;
	var manuPages = document.getElementById("manuPages").value;
	
	total = + manuService + manuPages * 10;
	
	var bookLayout = document.getElementById("bookLayout");
	
	(bookLayout.checked) ? (total += 200) : (total -= 0);
	
	var coverDesign = document.getElementById("coverDesign");
	
	(coverDesign.checked) ? (total += 300) : (total -= 0);
	
	var printing = document.getElementById("printing").value;
	
	(printing > 0) ? (total += printing * 50) : (total -= 0);
	
	var distribution = document.getElementById("distribution");
	
	(distribution.checked) ? (total += 50 * printing) : (total -= 0);
	
	
	alert("Your total is $" + total);
}

function showServices() {
	
	// gather element variables
	var mService = document.getElementById("mService");
	var pdService = document.getElementById("pdService");
	var manuDetails = document.getElementById("manuDetails");
	var pdDetails = document.getElementById("pdDetails");
	
	
	// show/hide manuscript service options if checkbox is clicked
	if (mService.checked === true) {
		manuDetails.style.display = "block";
	} else {
		manuDetails.style.display = "none";
	}
	
	// show/hide printing and distribution service options if checkbox is clicked
	if (pdService.checked === true) {
		pdDetails.style.display = "block";
	} else {
		pdDetails.style.display = "none";
	}
}

// check to make sure manuscript pages are >0 if service is selected
function validateManuscript() {
	var pages = document.getElementById("manuPages").value;
	var checkManu = document.getElementById("mService");
	
	if (mService.checked == true) {
		try {
			if (pages <= 0) throw "You need to submit at least one page for a manuscript review.";
		}
		catch(err) {
			alert(err);
		}
	}
		
}

// check to make sure print copies are >5 and <5000 if service is selected

function validatePD() {
	var copies = document.getElementById("printing").value;
	var checkPD = document.getElementById("pdService");
	
	if (checkPD.checked == true) {
		try {
			if (copies < 5) throw "too low";
			if (copies > 5000) throw "too high"
			
		}
		catch(err) {
			alert("Your printing input is " + err + "\n Please pick a number between 5 and 5,000.");
			copies.value = "";
		}
	}
}


function resetForm() {
	document.getElementById("manuService").value = 100;
	document.getElementById("manuPages").value = 5;
	document.getElementById("bookLayout").checked = false;
	document.getElementById("coverDesign").checked = false;
	document.getElementById("printing").value = 0;
	document.getElementById("distribution").checked = false;
	document.getElementById("manuDetails").style.display = "none";
	document.getElementById("pdDetails").style.display = "none";
}

function runFunctions() {
	validateManuscript();
	validatePD();
	calcTotal();

}

// add event listeners, all backwards compatible

var mServiceButton = document.getElementById("mService");
if (mServiceButton.addEventListener) {
	mServiceButton.addEventListener("click", showServices, false);
}
else if (mServiceButton.attachEvent) {
	mServiceButton.attachEvent("onclick", showServices);
}

var pdServiceButton = document.getElementById("pdService");
if (pdServiceButton.addEventListener) {
	pdServiceButton.addEventListener("click", showServices, false);
}
else if (pdServiceButton.attachEvent) {
	pdServiceButton.attachEvent("onclick", showServices);
}

var submitButton = document.getElementById("submit");
if (submitButton.addEventListener) {
	submitButton.addEventListener("click", runFunctions, false);
}
else if (submitButton.attachEvent) {
	submitButton.attachEvent("onclick", runFunctions);
}
	
var resetButton = document.getElementById("reset");
if (resetButton.addEventListener) {
	resetButton.addEventListener("click", resetForm, false);
}
else if (resetButton.attachEvent) {
	resetButton.attachEvent("onclick", resetForm);
}






