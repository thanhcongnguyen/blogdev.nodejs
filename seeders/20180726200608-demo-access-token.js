'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('oauth_access_tokens', [{
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbmduZ3V5ZW4iLCJpYXQiOjE1MzI2Mzc4MDZ9.WAqVGtPM3I-9SJ1dkvzrD-bQBqrOQaQxuuuwJBCivuo',
      user_id: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('oauth_access_tokens', null, {});
  }
};
