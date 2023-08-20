import express from "express";
import { accountRoutes } from "./routes/accountRoutes";

const app = express();

app.use(express.json());
app.use(accountRoutes);


export { app };
