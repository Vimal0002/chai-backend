import connectDB from "./db/project.js";
import dotenv from "dotenv";
import {app} from "./app.js"

dotenv.config({
    path: './env'
});
// const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(` Server is running at port : ${process.env.PORT} `);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
 })




