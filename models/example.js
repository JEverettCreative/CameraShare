module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("rentals", {
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    available: DataTypes.BOOLEAN
  });
  return Category;
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    username: DataTypes.STRING,
    hashstring: DataTypes.STRING
  });
  return User;
};
