module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        dataIn: '2022-02-27',
        dataOut: '2022-03-01',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        user_id: 2,
        dataIn: '2022-03-01',
        dataOut: '2022-03-04',
        summa: 5000,
        payded: false,
        comment: 'qwe',
        house_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
