const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Rewiew, ImageHouse }) {
      House.hasMany(Order, { foreignKey: 'house_id' });
      House.hasMany(Rewiew, { foreignKey: 'house_id' });
      House.hasMany(ImageHouse, { foreignKey: 'house_id' });
    }
  }
  House.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    rating: {
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};
