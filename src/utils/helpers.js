export function fail(message, statusCode) {
	const err = new Error(message);
	err.statusCode = statusCode;
	throw err;
}

export async function isExisting(queryPromise) {
	const result = await queryPromise;
	return !!result;
}
