import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const opportunities = [
	{
		id: "opp-1",
		title: "Backend Intern",
		company: "Acme Corp",
		description: "Work on Node.js APIs and database design.",
		deadline: new Date("2026-12-31"),
	},
	{
		id: "opp-2",
		title: "Frontend Intern",
		company: "Beta Ltd",
		description: "Build React components and UI features.",
		deadline: new Date("2026-11-30"),
	},
];

async function main() {
	for (const opp of opportunities) {
		await prisma.opportunities.upsert({
			where: { id: opp.id },
			update: opp,
			create: opp,
		});
	}
}

main()
	.then(() => prisma.$disconnect())
	.catch(async (err) => {
		console.error(err);
		await prisma.$disconnect();
		process.exit(1);
	});
