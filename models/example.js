module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("category", {
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    available: DataTypes.BOOLEAN
  });
  return Category;
};
