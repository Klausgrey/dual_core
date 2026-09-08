import { createUserService } from "../services/user.service.js";
import { sendSuccess } from "../utils/response.js";

export async function createUserController(req, res, next) {
	try {
		const data = await createUserService(req.body);
		return sendSuccess(res, 201, data, "user created successfully");
	} catch (err) {
		next(err);
	}
}
