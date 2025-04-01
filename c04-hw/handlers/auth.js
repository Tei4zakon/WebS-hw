const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { getByEmail, createAccount, updateFailLogin, updateSuccessLogin } = require("../pkg/account/");
const {
  validateAccount,
  AccountLogin,
  AccountRegister,
} = require("../pkg/account/validate");
const { getSection } = require("../pkg/config");

const login = async (req, res) => {
  try {
    await validateAccount(req.body, AccountLogin);
    const { email, password } = req.body;

    const account = await getByEmail(email);

    if (!account) {
      return res.status(404).send("Account not found!");
    }

    if (!bcryptjs.compareSync(password, account.password)) {
      await updateFailLogin(account.email, account.failedLogins+1)
      return res.status(400).send("Wrong password!");
    }

    const payload = {
      username: account.username,
      email: account.email,
      id: account._id,
      exp: new Date() / 1000 + 7 * 24 * 60 * 60,
      };

    
    const token = jwt.sign(payload, getSection("development").jwt_secret);
    await updateSuccessLogin(account.email, account.successfulLogins+1)
    return res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const register = async (req, res) => {
  try {
    await validateAccount(req.body, AccountRegister);
    const { username, email, password, confirmPassword } = req.body;

    const userExists = await getByEmail(email);

    if (userExists) {
      return res.status(400).send("Account with this email already exists!");
    }

    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match!");
    }

    const data = {
      username,
      email,
      password: bcryptjs.hashSync(password),
    };

    const account = await createAccount(data);
    return res.status(200).send(account);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

module.exports = {
  login,
  register,
};
