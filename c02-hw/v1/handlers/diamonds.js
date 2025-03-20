
const { read, write } = require("../read-write");

const getDiamonds = async (req, res) => {
  try {
    const diamonds = await read("diamonds.json");
    return res.status(200).send(diamonds);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createDiamond = async (req, res) => {
  try {
    const diamonds = await read("diamonds.json");
    const newDiamond = req.body;
    diamonds.push(newDiamond);
    await write("diamonds.json", diamonds);
    return res.status(200).send("New rare diamond added!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateDiamond = async (req, res) => {
  try {
    let diamonds = await read("data.json");
    const diamondId = Number(req.params.id);
    const newData = req.body;

    diamonds = diamonds.map((diamond, index) => {
      if (index === diamondId) {
        return {
          ...diamond,
          ...newData,
        };
      }

      return diamond;
    });

    await write("diamonds.json", diamonds);
    return res.status(200).send("Rare diamond updated successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const removeDiamond = async (req, res) => {
    try {
        const diamondId = Number (req.params.id)
        let diamonds = await read("diamonds.json");
        diamonds = diamonds.filter((_, index) => index !== diamondId);
    await write ("diamonds.json", diamonds);
    return res.status(200).send("Rare diamond deleted successfully!")
} catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
      };
    };

module.exports = {
  getDiamonds,
  createDiamond,
  updateDiamond,
  removeDiamond,
};
