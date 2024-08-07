import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "A Movie must have a Title."],
      maxLength: [
        60,
        " A Movie title Must be Between Between 2 to 60 Characters.",
      ],
      minLength: [2, "A Movie Title must be atleast 2 Characters."],
    },

    description: {
      type: String,
      trim: true,
    },
    genre: {
      type: [String],
      trim: true,
      required: [true, "A Movie must have a genre."],
    },
    release_year: {
      type: Number,
      required: [true, "A movie must have a Release year."],
    },
    director: {
      type: String,
      required: [true, "A Movie must have a Director Name."],
    },
    rating: {
      type: String,
      required: [true, "A Movie must have a Rating."],
    },
    cast: {
      type: [String],
      required: [true, "A Movie must have a Cast."],
    },
    duration_minutes: {
      type: Number,
      required: [true, "A Movie must have a Duration."],
    },
    season: Number,
    total_episodes: Number,
    type: {
      type: String,
      // required: [true, "Please Provide a Type Movie or Series."],
    },
  },
  { collection: "movies", timestamps: true }
);

const MovieModel =
  mongoose.models.MovieModel || mongoose.model("MovieModel", movieSchema);

export default MovieModel;
