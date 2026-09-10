import {
	createApplicationModel,
	findApplicationByUserAndOpportunity,
	getAllApplication,
} from "../models/application.model.js";
import { findOpportunityById } from "../models/opportunities.model.js";
import { fail } from "../utils/helpers.js";

export async function createApplicationService({ userId, opportunityId }) {
	const opportunity = await findOpportunityById({ id: opportunityId });
	if (!opportunity) fail("opportunity not found", 404);

	const isExisting = await findApplicationByUserAndOpportunity({
		userId,
		opportunityId,
	});
	if (isExisting) fail("you have already applied to this opportunity", 409);

	return createApplicationModel({ userId, opportunityId });
}

export async function getAllApplicationService() {
	return getAllApplication();
}
