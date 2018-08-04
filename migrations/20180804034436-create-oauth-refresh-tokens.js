'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth_refresh_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      refresh_token: {
        type: Sequelize.CHAR(256),
        unique: true
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      is_revoked: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      expires_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('oauth_refresh_tokens');
  }
};