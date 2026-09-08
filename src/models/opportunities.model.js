import prisma from "../config/prisma.js";

export async function findAllOpportunities() {
	return prisma.opportunities.findMany();
}

export async function findAllOpportunitiesById({ id }) {
	return prisma.opportunities.findUnique({ where: { id } });
}
