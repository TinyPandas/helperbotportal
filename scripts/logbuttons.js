function update(src) {
	console.log(src);
	document.getElementById("log-page").src = src;
}

function version(id) {
	update("./logs/" + id + ".html");
}