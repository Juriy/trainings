function trim(text, maxLen) {
	var cut = text.substr(0, maxLen);
	return cut.substr(0, 
		Math.min(cut.length, cut.lastIndexOf(' ')));
}

function asPlainText(html) {
	return html ? html.replace(/<(?:.|\n)*?>/gm, '') : '';
}