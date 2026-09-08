import prisma from "../config/prisma.js";

export async function createUserModel({ name, email, password }) {
	return prisma.users.create({
		data: { name, email, hashedPassword: password },
	});
}

export async function findUserById({ id }) {
	return prisma.users.findUnique({ where: { id } });
}
export async function findUserByEmail({ email }) {
	return prisma.users.findUnique({ where: { email } });
}
