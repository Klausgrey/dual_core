import { createUserController } from "../controllers/user.controller.js";

import express from "express";
const router = express.Router();

router.post("/register", createUserController);

export default router;
