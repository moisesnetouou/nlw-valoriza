import "reflect-metadata";
import "dotenv/config";
import express, { json } from 'express';

import "./database";

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 5000, () => console.log("Server is Running!"))