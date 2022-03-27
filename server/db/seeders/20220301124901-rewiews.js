module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rewiews', [{
      house_id: 1,
      nameUser: 'Ваня',
      description: 'Очень кайфовый дом. Было хорошо',
      rating: 5,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      house_id: 1,
      nameUser: 'Петя',
      description: 'Лучший отдых в жизни',
      rating: 4,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      house_id: 1,
      nameUser: 'Таня',
      description: 'Хорошо отдохнула.Вернусь еще',
      rating: 5,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      house_id: 1,
      nameUser: 'Саша',
      description: 'Был зимой. Очень понравилось.',
      rating: 3,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    }, {
      house_id: 1,
      nameUser: 'Аня',
      description: 'Лучший отдых в жизни',
      rating: 4,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      house_id: 1,
      nameUser: 'Том',
      description: 'НЕ знаю что писатью. Одги эмоции',
      rating: 5,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      house_id: 1,
      nameUser: 'Валентин',
      description: 'Прекрасный вид',
      rating: 3,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    }, {
      house_id: 4,
      nameUser: 'Дима',
      description: 'Если есть на свете рай то это ваш домик',
      rating: 4,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      house_id: 4,
      nameUser: 'Паша',
      description: 'Хорош.Вернусь еще если не умру',
      rating: 5,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      house_id: 1,
      nameUser: 'Надя',
      description: 'Классю Хочу обратно',
      rating: 3,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rewiews', null, {});
  },
};
