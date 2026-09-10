import {
	getAllOpportunities,
	getOpportunityById,
} from "../controllers/opportunities.controller.js";
import { authorize } from "../middleware/authenticate.middleware.js";

import express from "express";
const router = express.Router();

router.get("/opportunities", authorize, getAllOpportunities);
router.get("/opportunities/:id", authorize, getOpportunityById);

export default router;
