/**
 * 
 */
 
 function validateUser() {
		var username = document.getElementById("uname").value
		if(username=="") {
			document.getElementById("userErr").innerHTML='username cannot be blank';			
			return false;
		}
		var password = document.getElementById("upass").value
		if(password=="") {
			document.getElementById("passErr").innerHTML='password cannot be blank';
			return false;
		}
		return true;
	}
	function clearUserErr(){document.getElementById("userErr").innerHTML="";}
	function clearPassErr(){document.getElementById("passErr").innerHTML="";}
 