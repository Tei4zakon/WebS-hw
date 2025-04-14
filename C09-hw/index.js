const express = require("express");

const { getSection } = require("./pkg/config/configIndex");
const { getCharacter, getCharactersGender } = require("./handlers/characters");

const app = express();

app.get("/api/character/name/:name", getCharacter); 
app.get("/api/character/gender/ :gender", getCharactersGender);

app.listen(getSection("characters").port, () => {
  console.log(`Server started at port ${getSection("characters").port}`);
});