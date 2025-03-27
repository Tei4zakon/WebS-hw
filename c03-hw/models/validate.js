const { Validator } = require("node-input-validator");
 
 const ButterflyCreate = {
    family: "required|string",
    knownAs: "required|string",
    worldwideSpecies: "required|integer|min:1",
 };
 
 const ButterflyUpdate = {
    family: "string",
    knownAs: "string",
    worldwideSpecies: "integer|min:1",
 };
 
 const validateButterfly = async (data, schema) => {
   const validator = new Validator(data, schema);
   const err = await validator.check();
 
   console.log("Greska", err);
 
   if (!err) {
     throw {
       code: 400,
       error: "Greska na klient!",
     };
   }
 };
 
 module.exports = {
   ButterflyCreate,
   ButterflyUpdate,
   validateButterfly,
 };