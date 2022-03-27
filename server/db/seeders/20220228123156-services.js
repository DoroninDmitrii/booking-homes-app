module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        name: 'САУНА',
        description: 'Для того, чтобы загородный отдых был насыщенным и полезным для здоровья, разнообразьте его посещением сауны с панорамным видом на лес и озеро . Сауна предназначена для компаний до 10 человек.',
        price: 2000,
        img: '/green_sauna_01_icon-icons.com_59424.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'БАНЯ НА ДРОВАХ',
        description: 'Русская баня расположена в отдалённой части парка посреди соснового леса. Внутри имеется комната отдыха со скамейками, плетеными креслами и столом , удобства, предбанник с душевыми кабинками и парилка. Помещение обогревается. Есть открытая деревянная терраса',
        price: 1250,
        img: '/green_sauna_icon-icons.com_59423.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
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
