import express from "express";
import connectDB from "./../config/connectDB.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();
const app = express();

export default app;
