import {
	findAllOpportunity,
	findOpportunityById,
} from "../models/opportunities.model.js";

import { fail } from "../utils/helpers.js";

export async function getAllOpportunityService() {
	return findAllOpportunity();
}

export async function getOpportunityByIdService({ id }) {
	const opportunity = await findOpportunityById({ id });
	if (!opportunity) fail("opportunity not found", 404);

	return opportunity;
}
