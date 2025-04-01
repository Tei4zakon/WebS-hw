const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  successfulLogins: {
    type: Number,
    start: 0
  },
  failedLogins: {
    type: Number,
    start: 0
  }
});

const AccountsModel = mongoose.model("Account", accountSchema, "accounts");

const getAccounts = async () => {
  return await AccountsModel.find();
};

// getByEmail
const getByEmail = async (email) => {
  return await AccountsModel.findOne({ email });
};

const createAccount = async (data) => {
  const newAccount = new AccountsModel(data);
  return await newAccount.save();
};

const updateAccount = async (_id, data) => {
  return await AccountsModel.updateOne({ _id }, data);
};

const removeAccount = async (_id) => {
  return await AccountsModel.deleteOne({ _id });
};

const updateSuccessLogin = async (email, successLoginCount) => {
  return await AccountsModel.updateOne({ email }, {$set: { successfulLogins:successLoginCount }});
};

const updateFailLogin = async (email,failLoginCount) => {
  return await AccountsModel.updateOne({ email }, {$set: { failedLogins:failLoginCount }});
};

module.exports = {
  getAccounts,
  getByEmail,
  createAccount,
  updateAccount,
  removeAccount,
  updateSuccessLogin,
  updateFailLogin
};
