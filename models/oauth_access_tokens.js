'use strict';
module.exports = (sequelize, DataTypes) => {
  var oauth_access_tokens = sequelize.define('oauth_access_tokens', {
      access_token: { type: DataTypes.STRING, unique: true },
      user_id: DataTypes.INTEGER,
      scope: DataTypes.BOOLEAN,
      is_revoke: DataTypes.BOOLEAN,
      expires_at: DataTypes.DATE,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
  }, {});
  oauth_access_tokens.associate = function(models) {
    // associations can be defined here
  };
  return oauth_access_tokens;
};