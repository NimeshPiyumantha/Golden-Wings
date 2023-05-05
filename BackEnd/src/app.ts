import { config } from "dotenv";
// dotenv configuration
config();


import db from "mongoose";
import routes from "./Routes";
import { json, urlencoded } from "body-parser";
import cors from "cors";




// if you are receiving JSON data in request-body
app.use(json());



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
