import { createApplicationService } from "../services/application.service.js";
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
