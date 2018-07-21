'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    section: DataTypes.STRING,
    state: DataTypes.STRING,
    is_email_verified: DataTypes.BOOLEAN,
    is_required_change_pass: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};