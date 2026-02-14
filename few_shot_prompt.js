function toCamelCase(text) {
	return String(text)
		.trim()
		.toLowerCase()
		.split(/[_\s-]+/)
		.filter(Boolean)
		.map((word, index) => {
			if (index === 0) {
				return word;
			}
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join("");
}
