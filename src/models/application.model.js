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

export async function findApplicationByUserAndOpportunity({
	userId,
	opportunitiesId,
}) {
	return prisma.application.findFirst({
		where: { user_id: userId, opportunities_id: opportunitiesId },
	});
}

export async function getAllApplication() {
	return prisma.application.findMany();
}
