import Joi from "joi";

export const registerSchema = Joi.object({
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

export const loginSchema = Joi.object({
	email: Joi.string().required().email(),
	password: Joi.string()
		.min(8)
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
		.required()
		.messages({
			"string.pattern.base":
				"Must contain uppercase, lowercase, digit, and special char",
		}),
});
