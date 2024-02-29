import mongoose from "mongoose";
// import { DB_NAME } from "./db/constants.js";
import connectDB from "./db/project.js";
// import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
});

connectDB();

// const app = express();


