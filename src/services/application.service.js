import { createApplicationModel } from "../models/application.model.js";
import { findOpportunityById } from "../models/opportunities.model.js";
import { fail } from "../utils/helpers.js";

export async function createApplicationService({ userId, opportunityId }) {
	const opportunity = await findOpportunityById({ id: opportunityId });
	if (!opportunity) fail("opportunity not found", 404);

	return createApplicationModel({ userId, opportunityId });
}
