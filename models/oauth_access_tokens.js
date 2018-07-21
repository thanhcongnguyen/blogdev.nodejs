'use strict';
module.exports = (sequelize, DataTypes) => {
  var oauth_access_tokens = sequelize.define('oauth_access_tokens', {}, {});
  oauth_access_tokens.associate = function(models) {
    // associations can be defined here
  };
  return oauth_access_tokens;
};