export function errorHandler(err, req, res, next) {
	const statusCode = err.statusCode || 500;
	const message = err.message || "server error";

	console.error(err.stack);
	res.status(statusCode).json({ status: "false", message: message });
}
