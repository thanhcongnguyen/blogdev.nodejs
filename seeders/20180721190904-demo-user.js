'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        username: 'congnguyen',
        email: 'thanhcong150593@gmail.com',
        password: '$2b$10$DeZ337l9gOZqnSS2qStxbOXHlxy/QN8cgg0GwkRIDYMwFtjEzOgOC'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
