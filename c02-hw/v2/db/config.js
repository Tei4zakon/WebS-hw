const mongoose = require("mongoose")

const uri = "mongodb+srv://username:password@cluster06.25ug7.mongodb.net/gr-4007?retryWrites=true&w=majority&appName=Cluster06";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected!")
    } catch (err) {
        console.log(err)
    }
};

module.exports = connect;
