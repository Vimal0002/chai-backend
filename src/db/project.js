import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";


const connectDB=async()=>{
    try {
        await  mongoose.connect(`${process.env.MONGODB_URI}`,)
        console.log("connected to mongobhosda");
    } catch (error) {
        console.log("error while  connecting to the database");
        console.log(error);
    }
}

export default connectDB;
