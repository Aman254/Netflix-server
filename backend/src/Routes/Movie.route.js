import express from "express";
import {
  getAllMovies,
  getMovieById,
  deleteMovie,
  postMovie,
  updateMovie,
} from "../Controllers/Movie.controller.js";

const router = express.Router();

router.route("/").get(getAllMovies);

router.route("/:id").get(getMovieById).delete(deleteMovie).patch(updateMovie);

router.route("/").post(postMovie);

export default router;
