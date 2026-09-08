import { createUserModel, findUserByEmail } from "../models/user.model.js";
import { fail, isExisting } from "../utils/helpers.js";

export async function createUserService({ name, email, password }) {
	const user = await findUserByEmail({ email });
	if (user) fail("this email aleady exists", 409);

	const data = await createUserModel({ name, email, password });
	return data;
}
