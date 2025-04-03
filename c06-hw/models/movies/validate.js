const MovieCreate = {
    title: "required|string",
    director: "required|string",
    releaseDate: "required|date",
    genre: "required|string",
    oscars: "required|integer",
    IMDbRating: "required|integer",
  };
  
  const MovieUpdate = {
    title: "string",
    director: "string",
    releaseDate: "date",
    genre: "string",
    oscars: "integer",
    IMDbRating: "integer",
  };
  
  module.exports = { MovieCreate, MovieUpdate };