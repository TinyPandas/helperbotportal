function reqListener () {
  console.log(this.responseText);
}

function update(src) {
	console.log(src);
	var doc = document.getElementById("log-embed");
	doc.src = src;
	console.log(doc.src);
}

function version(id) {
	update("./logs/" + id + ".html");
}