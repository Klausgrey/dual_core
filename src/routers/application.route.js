import { createApplication } from "../controllers/application.controller.js";
import { authorize } from "../middleware/authenticate.middleware.js";

import express from "express";
const router = express.Router();

router.post("/application", authorize, createApplication);

export default router;
