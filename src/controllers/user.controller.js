import { createUserService } from "../services/user.service.js";
import { sendSuccess } from "../utils/response.js";

export async function createUserController(req, res, next) {
	const data = await createUserService(req.body);
	return sendSuccess(res, 201, data, "user created successfully");
}
