import {
	getAllOpportunitiesService,
	getOpportunityByIdService,
} from "../services/opportunities.service.js";
import { sendSuccess } from "../utils/response.js";

export async function getAllOpportunities(_req, res, next) {
	try {
		const data = await getAllOpportunitiesService();
		return sendSuccess(res, 200, data, "All opportunities");
	} catch (err) {
		next(err);
	}
}

export async function getOpportunityById(req, res, next) {
	try {
		const data = await getOpportunityByIdService(req.params.id);
		return sendSuccess(res, 200, data, "opportunities ");
	} catch (err) {
		next(err);
	}
}
