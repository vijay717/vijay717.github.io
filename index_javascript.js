var user = "";
function setCookie(cname,cvalue,exdays) { //Cookies work in IE, might not work in Chrome
        var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
    	var decodedCookie = decodeURIComponent(document.cookie);
    	var ca = decodedCookie.split(';'); //String Method 2

	for(var i = 0; i < ca.length; i++) {
        	var c = ca[i];
        	while (c.charAt(0) == ' ') {
        	        c = c.substring(1);
        	}

		if (c.indexOf(name) == 0) {
            		return c.substring(name.length, c.length);
        	}
    	}

	return "";
}

function checkCookie() {
    	user=getCookie("username");
   	if (user !== "") {
  		alert("Welcome back " + user + "!");
        document.getElementById("home").style.visibility = 'visible';
    	}

	else {
       		user = prompt("Please enter your name:","");
       		if (user != "" && user != null) {
        		setCookie("username", user, 30);
            alert("Welcome " + user + "!");
       		}
    	}
}

function password() {
	var exit = 0;
	var wrong = 0;
	if(document.cookie == ""){ //If the user returns to the homepage, they won't have to repeat password
		while(exit!==-1){
			//Window methods 1-2, property 2
			var password = prompt("Please enter the password (password is 'javascript')"); //Correct password : javascript
			if (password === "") {
				alert("Please enter all data!");
			}
			else if (password !== "javascript") {
				alert("Access Denied!");
				wrong++;
			}
			else {
				alert("Welcome to Our Homepage!");
				exit = -1;
				checkCookie();
        document.getElementById("home").style.visibility = 'visible';
			}

			//History Method 1 and Property 1, Window Property 3-4
			if(wrong === 5) {
				alert("Too many failed attempts! You will now be redirected from our page.");
				if(history.length > 1)
					window.history.back();
				else
					window.location.assign("https://www.google.com/");
				exit = -1;
			}
		}
	}

	else
		checkCookie(); //Welcomes them back to page
}

/* Date methods 1-2,
   Window method 3
   Window property 5
*/
function startclock() {
	var time = new Date();
	var hours = time.getHours();
	var min = time.getMinutes();
	var ampm = (hours >= 12) ? "p.m." : "a.m.";
	var clock = window.document.getElementById("clock");

	hours = (hours >= 13) ? hours -= 12 : hours;
	hours = (hours < 1) ? 12 : hours;
	min = (min < 10) ? "0" + min : min;
	clock.innerHTML = "Time: " + hours + ":" + min + " " + ampm;
	setTimeout(function() {startclock();}, 1000);
}
startclock();
