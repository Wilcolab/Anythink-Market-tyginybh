function toKebabCase(str) {
	if (str === null || str === undefined) {
		throw new Error("toKebabCase: input is required");
	}
	if (typeof str !== "string") {
		throw new Error("toKebabCase: input must be a string");
	}

	const normalized = str.trim().replace(/[_\s]+/g, " ");
	const cleaned = normalized.replace(/[^a-zA-Z0-9 ]+/g, "");
	const parts = cleaned.split(" ").filter(Boolean);

	if (parts.length === 0) {
		return "";
	}

	return parts.map((part) => part.toLowerCase()).join("-");
}
