import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

// routes
import authRoute from "./routes/authRoutes.js";
// import appoinmentRoute from "./routes/appoinmentRoutes.js";

import userRoute from "./routes/userRoutes.js";
import postRoute from "./routes/postRoute.js";
// configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));
console.log()
app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use("/auth", authRoute);
// app.use("/appointment", appoinmentRoute);
app.use("/user", userRoute);
app.use("/posts", postRoute);
app.listen(process.env.PORT, () => {
  console.log("Server running...");
});


/* ----------------------------MONGODB SETUP------------------- */
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

mongoose
.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((e) => {
    console.log("db not connected");
  });
  
  // import fs from 'fs'
  // // fs.rename('./post4.jpeg','./post',cb)
  // // console.log()
  // fs.mkdirSync('./xy')



  // fs.rmSync('./xy/p1.jpeg')

  