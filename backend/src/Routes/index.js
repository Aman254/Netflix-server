import express from "express";
import movieRoutes from "./Movie.route.js";

const router = express.Router();

router.use("/movies", movieRoutes);

export default router;
