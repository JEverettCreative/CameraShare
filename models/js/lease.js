var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Camera = sequelize.define("camera", {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  availability: Sequelize.BOOLEAN,
  description: Sequelize.STRING
});

camerashare.sync();

module.exports = camerashare;
