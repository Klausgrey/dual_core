import { errorHandler } from "./middleware/errorHandler.js.middleware";

import express from "express";
const app = express();

app.use(errorHandler);
export default app;
