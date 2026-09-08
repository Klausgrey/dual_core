import { errorHandler } from "./middleware/errorHandler.middleware.js";
import userRouter from "./routers/user.route.js";

import express from "express";
const app = express();

app.use(express.json());


app.use("/api", userRouter);

app.use(errorHandler);
export default app;
