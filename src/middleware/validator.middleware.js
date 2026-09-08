export function validator(schema) {
	return (req, res, next) => {
		const { error, value } = schema.validate(req.body);
		if (error) {
			return res.status(400).json({
				message: "validation error",
				details: error.details.map((err) => err.message),
			});
		}
		req.body = value;
		next();
	};
}
