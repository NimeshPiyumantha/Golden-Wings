import { config } from "dotenv";
// dotenv configuration
config();

import express, { Request, Response } from "express";
import db from "mongoose";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import routes from "./Routes";

// Create the express app
const app = express();

//bodyParser json object size change
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));

// allow CORS
// app.use(cors());

// Here you can add more origins to allow CORS
const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// if you are receiving JSON data in request-body
app.use(json());

// if you are receiving url-encoded data in request-body
app.use(urlencoded({ extended: true }));

// Mount the routes at /resourse URL path
app.use("/", routes);

// error handling middleware
app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: error.message });
});

// connect to the database
db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    console.log("Database connected!");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB : ", error.message);
  });
