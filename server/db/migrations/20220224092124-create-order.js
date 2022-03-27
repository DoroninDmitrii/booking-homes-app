module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      dataIn: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      dataOut: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      summa: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      payded: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      comment: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      house_id: {
        allowNull: false,
        references: {
          model: 'Houses',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      // service_id: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER),
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
