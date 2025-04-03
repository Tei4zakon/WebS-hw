const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");

const {
  getAllMovies,
  createNewMovie,
  getAllMoviesForAuthor,
  updateCurrentMovie,
  removeCurrentMovie,
  
} = require("./handlers/movies")

const app = express();
app.use(express.json());

app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth/login", "/auth/register"],
  })
);

//app.get("/", (req, res) => res.send("Hello World!"));
app.post("/auth/login", login);
app.post("/auth/register", register);

app.get("/movies", getAllBooks);
app.get("/api/movies/author", getAllBooksForAuthor);
app.post("/api/movies", createNewBook);
app.put("/api/movies/:id", updateCurrentBook);
app.delete("/api/movies/:id", removeCurrentBook);

app.listen(getSection("development").port, () =>
  console.log(`Server is running on port ${getSection("development").port}`)
);
