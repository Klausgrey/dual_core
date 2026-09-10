import { errorHandler } from "./middleware/errorHandler.middleware.js";
import userRouter from "./routers/user.route.js";
import opportunityRoute from "./routers/opportunities.route.js";
import applicationRoute from "./routers/application.route.js";

import express from "express";
const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", opportunityRoute);
app.use("/api", applicationRoute);

app.use(errorHandler);
export default app;
