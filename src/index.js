import mongoose from "mongoose";
// import { DB_NAME } from "./db/constants.js";
import connectDB from "./db/project.js";
// import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
});

connectDB();

then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : $
        {process.env.PORT} `);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
 })

// const app = express();


