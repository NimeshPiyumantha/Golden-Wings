import { config } from "dotenv";
// dotenv configuration
config();


import db from "mongoose";

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
