export function sendSuccess(res, statusCode, data) {
	res.status(statusCode).json({ status: true, data });
}

export function sendError(res, statusCode, message) {
	res.status(statusCode).json({ status: false, message });
}
