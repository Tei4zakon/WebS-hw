
const express = require("express");

const { getButterflies, createButterfly, removeButterfly, updateButterfly } = require("./handlers/butterflies");

const connectToDB = require("./db/config");
connectToDB();



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

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/auth/login", login);
app.post("/auth/register", register);

app.get("/butterflies", getButterflies);
app.post("/butterflies", createButterfly);
app.put("/butterflies/:id", updateButterfly);
app.delete("/butterflies/:id", removeButterfly);

app.listen(getSection("development").port, () =>
  console.log(`Server started at port ${getSection("development").port}`)
);
