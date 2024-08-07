import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";

export const getAllMovies = async (req, res) => {
  res.send("Hello from get all Movies.");
};

export const getMovieById = async (req, res) => {
  res.send("Hello from Get Movie by Id");
};

export const postMovie = async (req, res) => {
  res.send("Hello from Post Movie");
};

export const deleteMovie = async (req, res) => {
  res.send("Hello from Delete Movie");
};

export const updateMovie = async (req, res) => {
  res.send("Hello from UpdateMovie Movie");
};
