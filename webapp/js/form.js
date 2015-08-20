function validateForm(){
	var firstName = document.form1.firstName;
	var lastName = document.form1.lastName;
	var age = parseInt(document.form1.age);
	
	var errors = '';
	if (firstName === '' || firstName === null){
		errors+= '\nFirst Name Required';
	}
	if(lastName === '' || lastName === null){
		errors += '\nLast Name Required';
	}
	if (age !== '' && age!== null && age<18){
		errors += "Age must be >18";
	}
	if (errors !== ''){
		var errorDiv = document.getElementById("errorDiv");
		errorDiv.className = "show";
		errorDiv.innerHTML = errors;
	}else{
		document.form[0].submit();
	}
}

function clearFields(){
	
	var index = document.form[0].country.selectedIndex;
	alert(document.forms[0].country[index].text);
}