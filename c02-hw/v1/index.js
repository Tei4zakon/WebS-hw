
const express = require("express");

const { getDiamonds, createDiamond, updateDiamond, removeDiamond} = require("./handlers/diamonds");

const app = express();
app.use(express.json());


app.get("/diamonds", getDiamonds);
app.post("/diamonds", createDiamond);
app.put("/diamonds/:id", updateDiamond);
app.delete("/diamonds/:id", removeDiamond);

app.listen(6060, () => console.log("Server started at port 6060!"));
