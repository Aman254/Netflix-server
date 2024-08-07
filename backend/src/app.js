import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongosanitize from "express-mongo-sanitize";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import createHttpError from "http-errors";

//Dotenv Configuration
dotenv.config();

//Creating an Express App
const app = express();

//Adding Morgan Middleware
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//Using Helmet for security
app.use(helmet());

//Parse Json request Body
app.use(express.json());

//Sanitize mongo Request
app.use(mongosanitize());

//Using Cookie Parser
app.use(cookieParser());

//Compression
app.use(compression());

app.use(cors({ origin: "http://localhost:3000" }));

export default app;
