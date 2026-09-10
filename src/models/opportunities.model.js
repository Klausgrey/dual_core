import prisma from "../config/prisma.js";

export async function findAllOpportunity() {
	return prisma.opportunities.findMany();
}

export async function findOpportunityById({ id }) {
	return prisma.opportunities.findUnique({ where: { id } });
}
