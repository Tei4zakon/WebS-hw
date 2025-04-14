const {
    getCharacterName, getCharacterByGender
  } = require("../pkg/rick&morty");
  
  const getCharacter = async (req, res) => {
    try {
      const character = await getCharacterName(req.params.name);
      return res.status(200).send(character);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  
  const getCharactersGender = async (req, res) => {
    try {
      const charsGender = await getCharacterByGender(
        req.params.gender
      );
      return res.status(200).send(charsGender);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  
  module.exports = {
    getCharacter,
    getCharactersGender
  };