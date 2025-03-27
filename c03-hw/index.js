
const express = require("express");

const { getButterflies, createButterfly, removeButterfly, updateButterfly } = require("./handlers/butterflies");

const connectToDB = require("./db/config");
connectToDB();



const app = express();
app.use(express.json());

app.get("/butterflies", getButterflies);
app.post("/butterflies", createButterfly);
app.delete("/butterflies/:id", removeButterfly);
app.put("/butterflies/:id", updateButterfly);

app.listen(6060, () => console.log("Server started at port 6060!"));
