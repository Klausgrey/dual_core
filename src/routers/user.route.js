import { register, login } from "../controllers/user.controller.js";
// import { authorize } from "../middleware/authenticate.middleware.js";
import { validator } from "../middleware/validator.middleware.js";
import { registerSchema, loginSchema } from "../validator/user.validate.js";

import express from "express";
const router = express.Router();

router.post("/register", validator(registerSchema), register);
router.post("/login", validator(loginSchema), login);

export default router;
