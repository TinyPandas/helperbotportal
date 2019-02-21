function update(src) {
	var doc = document.getElementById("log-embed");
	doc.src = src;
}

function version(id) {
	update("/logs/" + id + ".html");
}