import { errorHandler } from "./middleware/errorHandler.js.middleware";
import userRouter from "./routers/user.route.js";

import express from "express";
const app = express();

app.use("/api", userRouter);

app.use(errorHandler);
export default app;
