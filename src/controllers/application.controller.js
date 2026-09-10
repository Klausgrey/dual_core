import {
	createApplicationService,
	getAllApplicationService,
} from "../services/application.service.js";
import { sendSuccess } from "../utils/response.js";

export async function createApplication(req, res, next) {
	try {
		const userId = req.user.id;
		const data = await createApplicationService({ ...req.body, userId });
		return sendSuccess(res, 201, data, "application created");
	} catch (err) {
		next(err);
	}
}

export async function getAllApplication(_req, res, next) {
	try {
		const data = await getAllApplicationService();
		return sendSuccess(res, 200, data, "all the users application");
	} catch (err) {
		next(err);
	}
}
