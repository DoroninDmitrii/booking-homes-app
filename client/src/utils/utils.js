export const router = {
  login: '/api/admin/login',
  home: '/api/homes',
  order: {
    get: '/api/order/free',
    save: '/api/order/save',
  },

  reviews: '/api/reviews',
  services: '/api/services',
  admin: {
    addHouseServerPath: '/api/admin/addHouse',
    addHouseServerIMGPath: '/api/admin/addHouse/img',
    imgHousePath: '/images/homes/',
    editHouse: '/api/admin/editHouse',
    allReservations: '/api/admin/reservations/all',
    updateReservations: '/api/admin/reservations/all/edit',
  },
};

export const reactRouter = {
  user: {
    homepage: '/',
    about: '/about',
    booking: '/booking',
    addedHouse: '/booking/:id',
    house: '/house',
    currentHouse: '/house/:id',
    services: '/services',
    contacts: '/contacts',
    notfound: '*',
  },

  admin: {
    main: '/admin/main',

    allReservations: '/admin/reservations/all',
    addReservation: '/admin/reservations/add',
    editReservations: '/admin/reservations/edit/:id',
    editReservationForParamas: '/admin/reservations/edit/',
    allHouses: '/admin/houses/all',
    addHouse: '/admin/houses/add',
    login: '/admin/login',
    logout: '/admin/logout',
    addHouseServerPath: '/admin/addHouse',
    confirmReviews: '/admin/confirmReviews',
    chooseEditHouse: '/admin/houses/edit/:id',
    editHouse: '/admin/houses/edit/',

  },
};
