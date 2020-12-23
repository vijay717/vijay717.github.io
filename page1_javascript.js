function check() {
	var etest = "valid";	
	var ematch = /^\S+@\S+\.\S+$/; //Checks for __@__.__ with no spaces
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
    	var email = document.getElementById("email").value;
    	if (ematch.test(email.trim()) === false) //String Method 3
    		etest = "invalid";

	function nametest(name) {
		var tomatch = /^[a-z]+$/i;
   		this.name = name;
    		if (tomatch.test(name.trim()) && (name.length > 1)){ // String Property 1
    			return "valid";
    		}
    		else {
    			return "invalid";
    		}
	}	
   	var ftest = nametest(fname);
 	var ltest = nametest(lname);
	if(etest === "invalid" || ftest === "invalid" || ltest === "invalid") {
		alert("Error. Not all of your inputs were valid. Your first name was " + ftest + ", your last name was " + ltest + " and your email was " + etest + ".");
	}
	
	else
		alert("Success! Now, a confirmation email will be sent to " + email);
}

var submit_button = document.getElementById("submit");
submit_button.onclick = function() {
	check();
}

