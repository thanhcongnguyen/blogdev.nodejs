'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING,
        unique: true
      },
      section: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_required_change_pass: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      change_pass_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      verified_email_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      level: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};