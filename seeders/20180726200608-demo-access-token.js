'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('oauth_access_tokens', [{
      access_token: '$2b$10$DeZ337l9gOZqnSS2qStxbOXHlxy/QN8cgg0GwkRIDYMwFtjEzOgOC',
      user_id: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('oauth_access_tokens', null, {});
  }
};
