const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ImageHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ House }) {
      ImageHouse.belongsTo(House, { foreignKey: 'house_id' });
    }
  }
  ImageHouse.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    house_id: {
      references: {
        model: 'Houses',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'ImageHouse',
  });
  return ImageHouse;
};
