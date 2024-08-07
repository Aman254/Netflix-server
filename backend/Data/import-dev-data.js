import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "../src/Models/Movie.model.js";
import logger from "../src/configs/logger.config.js";
import path from "path";

//Getting Current Working Directory
const cwd = process.cwd();

//Configuring Environment Variables.
dotenv.config({ path: "../.env" });

const DATABASE_URL = process.env.DATABASE_URL;

//Contructing Path forthe Data file
const filePath = path.join(cwd, "data.json");

//Read JSON FIle
const movies = JSON.parse(fs.readFileSync(filePath, `utf-8`));

const importData = async () => {
  try {
    await Movie.create(movies);
    logger.info("Data loaded sucessfully.");
  } catch (error) {
    logger.error(`Error in importing data: ${error}`);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Movie.deleteMany();
    logger.info("Data deleated sucessfully.");
  } catch (error) {
    logger.error(`Error in Deleteing data: ${error}`);
  }
  process.exit();
};

mongoose.connection.on("error", (err) => {
  logger.error(`Error in connecting to mongoDb: ${err}`);
  process.exit(1);
});

//Connecting to MongoDB Databse:
mongoose
  .connect(DATABASE_URL, {})
  .then(() => {
    logger.info("Connected to DATABSE Sucessfully.");

    if (process.argv[2] === "--import") {
      importData();
    } else if (process.argv[2] === "--delete") {
      deleteData();
    }
  })
  .catch((error) => {
    logger.error(`Error in connecting to Mongodb ${error}`);
    process.exit(1);
  });
