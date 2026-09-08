import {
	findAllOpportunities,
	findAllOpportunitiesById,
} from "../models/opportunities.model.js";

import { fail } from "../utils/helpers.js";

export async function getAllOpportunitiesService() {
	return findAllOpportunities();
}

export async function getOpportunityByIdService({ id }) {
	const opportunity = await findAllOpportunitiesById({ id });
	if (!opportunity) fail("opportunity not found", 404);

	return opportunity;
}
