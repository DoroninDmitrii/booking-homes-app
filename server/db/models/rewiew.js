const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rewiew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ House }) {
      Rewiew.belongsTo(House, { foreignKey: 'house_id' });
    }
  }
  Rewiew.init({
    house_id: {
      allowNull: false,
      references: {
        model: 'Houses',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    nameUser: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'Rewiew',
  });
  return Rewiew;
};
