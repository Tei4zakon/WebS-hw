
const { get, create, update, remove } = require("../models/butterflies");

const getButterflies = async (req, res) => {
  try {
    const butterflies = await get();
    return res.status(200).send(butterflies);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createButterfly = async (req, res) => {
  try {
    await create(req.body);
    return res.status(200).send("Butterfly created successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateButterfly = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.status(200).send("Butterfly updated successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const removeButterfly = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("Butterfly removed successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getButterflies,
  createButterfly,
  updateButterfly,
  removeButterfly,
};
