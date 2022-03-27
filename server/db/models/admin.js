const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      validate: {
        isEmail: true,
      },
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    password: {
      validate: {
        min: 8,
        max: 32,
      },
      allowNull: false,
      type: DataTypes.TEXT,
    },
    isAdmin: {
      defaultValue: true,
      type: DataTypes.BOOLEAN,
    },

  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};
