const mongoose = require("mongoose");
const { getSection } = require("../config/INDEX.JS");

const uri = "mongodb+srv://user:password@cluster06.25ug7.mongodb.net/gr-4007?retryWrites=true&w=majority&appName=Cluster06";


async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
