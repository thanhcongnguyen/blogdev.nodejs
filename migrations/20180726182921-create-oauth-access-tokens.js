'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth_access_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      access_token: {
        type: Sequelize.CHAR(256)
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      scope: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      is_revoked: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      expires_at: {
        allowNull: false,
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
    return queryInterface.dropTable('oauth_access_tokens');
  }
};