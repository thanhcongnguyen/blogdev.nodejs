'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    section: DataTypes.STRING,
    state: DataTypes.STRING,
    is_email_verified: DataTypes.BOOLEAN,
    is_required_change_pass: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    change_pass_at: DataTypes.DATE,
    verified_email_at: DataTypes.DATE,
    level: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE 
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};