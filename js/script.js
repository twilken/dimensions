function displayDimensions() {
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	var display = document.getElementById("dimensions");
	display.innerHTML = width + "x" + height;
}

displayDimensions();
window.onresize = displayDimensions;
