import express from "express";
import { config } from "dotenv";
import { routes } from "../routes";

config({
    path: process.env.NODE_ENV === 'test' ? '.env.test': '.env'
});

const app = express();

app.use(express.json());
app.use(routes);

export { app };
