'use strict';
module.exports = (sequelize, DataTypes) => {
  var oauth_access_tokens = sequelize.define('oauth_access_tokens', {
      access_token: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      scope: DataTypes.BOOLEAN,
      is_revoked: DataTypes.BOOLEAN,
      expires_at: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
  }, {});
  oauth_access_tokens.associate = function(models) {
    // associations can be defined here
  };
  return oauth_access_tokens;
};