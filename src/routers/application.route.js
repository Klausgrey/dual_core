import { createApplication, getAllApplication } from "../controllers/application.controller.js";
import { authorize } from "../middleware/authenticate.middleware.js";

import express from "express";
const router = express.Router();

router.post("/application", authorize, createApplication);
router.get("/application", authorize, getAllApplication)

export default router;
