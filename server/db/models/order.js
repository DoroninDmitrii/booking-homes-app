const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, House }) {
      Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.belongsTo(House, { foreignKey: 'house_id' });
    }
  }
  Order.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    dataIn: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    dataOut: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    summa: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    payded: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    comment: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    house_id: {
      allowNull: false,
      references: {
        model: 'Houses',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
