const mongoose = require("mongoose");

const butterfliesSchema = mongoose.Schema({
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Account",
        immutable: true},
    family: String,
    knownAs: String,
    worldwideSpecies: Number, 
});

const ButterflyModel = mongoose.model("Butterfly", butterfliesSchema, "butterflies");

const get = async () => {
    return await ButterflyModel.find();
};

const create = async (data) => {
    const newButterfly = new ButterflyModel(data);
    return await newButterfly.save();
};

const update = async (id, data) => {
    return await ButterflyModel.updateOne({ _id: id }, data);
};

const remove = async(id) => {
    return await ButterflyModel.removeOne({_id:id})
};

module.exports = {
    get,
    create,
    update,
    remove,
  };