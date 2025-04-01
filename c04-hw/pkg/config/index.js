const fs = require("fs");

const CONFIG_SOURCE = `${__dirname}/../../config.json`;

let config = null;

if (config === null) {
  const file = fs.readFileSync(CONFIG_SOURCE, "utf-8");
  config = JSON.parse(file);

  // Vaka ke izgleda config koga ke se povika
  //   config = {
  // development:{...},
  // staging: {...}
  //     live: {
  //       port: 8080,
  //       MONGO_USERNAME: "admin",
  //       MONGO_PASSWORD: "admin",
  //     },
  //   };
}

// getSection("development")

const getSection = (section) => {
  if (!config[section]) {
    throw `Configuration section ${section} does not exist!`;
  }

  return config[section];
  // live: {
  //       port: 8080,
  //       MONGO_USERNAME: "admin",
  //       MONGO_PASSWORD: "admin",
  //     },
};

module.exports = {
  getSection,
};
