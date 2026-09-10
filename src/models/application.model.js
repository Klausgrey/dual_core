import prisma from "../config/prisma.js";

export async function createApplicationModel({ userId, opportunityId }) {
	return prisma.application.create({
		data: {
			user_id: userId,
			opportunities_id: opportunityId,
			status: "PENDING",
		},
	});
}

export async function findApplicationById({ id }) {
	return prisma.application.findUnique({ where: { id } });
}
