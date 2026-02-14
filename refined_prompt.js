function toCamelCase(str) {
	if (str === null || str === undefined) {
		throw new Error("toCamelCase: input is required");
	}
	if (typeof str !== "string") {
		throw new Error("toCamelCase: input must be a string");
	}

	const cleaned = str.replace(/[^a-zA-Z0-9 _-]+/g, "");
	const parts = cleaned.split(/[ _-]+/).filter(Boolean);

	if (parts.length === 0) {
		return "";
	}

	const lowerParts = parts.map((part) => part.toLowerCase());
	return (
		lowerParts[0] +
		lowerParts
			.slice(1)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join("")
	);
}
