import mongoose from "mongoose";
import app from "./app.js";
import logger from "./configs/logger.config.js";

//Environment Variables
const { DATABASE_URL } = process.env;
const PORT = process.env.PORT || 8000;

mongoose.connection.on("error", (err) => {
  logger.error(`Error in Connecting to MongoDB: ${err}`);
  process.exit(1);
});

mongoose.connect(DATABASE_URL, {}).then(() => {
  logger.info("DB Connected Sucessfully:");
});

app.get("/", (req, res) => {
  res.send("Hello from  Server");
});

let server;

server = app.listen(PORT, () => {
  logger.info(`Listening on ${PORT}:`);
});
