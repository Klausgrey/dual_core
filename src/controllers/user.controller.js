import {
	createUserService,
	loginUserService,
} from "../services/user.service.js";
import { sendSuccess } from "../utils/response.js";

export async function register(req, res, next) {
	try {
		const data = await createUserService(req.body);
		return sendSuccess(res, 201, data, "user created successfully");
	} catch (err) {
		next(err);
	}
}

export async function login(req, res, next) {
	try {
		const data = await loginUserService(req.body);
		return sendSuccess(res, 200, data, "logged in successfully");
	} catch (err) {
		next(err);
	}
}
