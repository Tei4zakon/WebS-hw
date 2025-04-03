const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
    title: String,
    director: String,
    releaseDate: Date,
    genre: String,
    oscars: Number,
    IMDbRating: Number,
    author_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Account",
    immutable: true,
  },
},
{ timestamps: true }
);

const movieModel = mongoose.model("Movie", moviesSchema, "movies");

const getMovies = async () => {
    return await MovieModel.find();
};

const getAuthorMovies = async (author_id) => {
    return await MovieModel.find({ author_id: author_id });
  };

const getSingleMovie = async (id) => {
    return await movieModel.findOne({ _id: id });
  };

const createMovie = async (data) => {
    const newMovie = new MovieModel(data);
    return await newMovie.save();
};

const updateMovie = async (id, data) => {
    return await MovieModel.updateOne({ _id: id }, data);
};

const removeMovie = async(id) => {
    return await MovieModel.removeOne({_id:id})
};

module.exports = {
    getMovies,
    getAuthorMovies,
    getSingleMovie,
    createMovie,
    updateMovie,
    removeMovie
  };
