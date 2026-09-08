import { createUserModel, findUserByEmail } from "../models/user.model.js";
import { fail } from "../utils/helpers.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export async function createUserService({ name, email, password }) {
	const user = await isExisting(findUserByEmail({ email }));
	if (user) fail("this email aleady exists", 409);

	const hashedPassword = await bcrypt.hash(password, 10);

	const data = await createUserModel({ name, email, hashedPassword });
	delete data.hashedPassword;

	return data;
}

export async function loginUserService({ email, password }) {
	const user = await findUserByEmail({ email });
	if (!user) fail("this email does not exists", 404);

	const match = await bcrypt.compare(password, user.hashedPassword);
	if (!match) fail("wrong password", 404);

	const payload = { id: user.id };

	const token = jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRATION_TIME,
	});

	delete user.hashedPassword;
	return { user, token };
}
