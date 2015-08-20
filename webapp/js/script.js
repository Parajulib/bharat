function showDetails() {
	var footer = document.getElementById("detail");
	var useLanguage = navigator.language;
	var browserString = navigator.appCodeName;
	footer.innerHTML = "<h3>" + browserString + "<br/>" + useLanguage + "</h3>";
}
