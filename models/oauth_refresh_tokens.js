'use strict';
module.exports = (sequelize, DataTypes) => {
  var oauth_refresh_tokens = sequelize.define('oauth_refresh_tokens', {
    refresh_token: DataTypes.STRING,
    user_id: DataTypes.STRING,
    is_revoked: DataTypes.BOOLEAN,
    expires_at: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  oauth_refresh_tokens.associate = function(models) {
    // associations can be defined here
  };
  return oauth_refresh_tokens;
};