import Joi from "joi";

const userSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string()
		.min(8)
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
		.required()
		.messages({
			"string.pattern.base":
				"Must contain uppercase, lowercase, digit, and special char",
		}),
});

