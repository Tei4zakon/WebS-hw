const express = require("express");

const { getSection } = require("./pkg/config/configIndex");
const { getCharacter, getCharacterByGender } = require("./pkg/rick&morty");

const app = express();

app.get("/api/characters/:name", getCharacter);
app.get("/api/characters/:gender", getCharacterByGender);

app.listen(getSection("characters").port, () => {
  console.log(`Server started at port ${getSection("characters").port}`);
});