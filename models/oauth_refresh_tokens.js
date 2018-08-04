'use strict';
module.exports = (sequelize, DataTypes) => {
  var oauth_refresh_tokens = sequelize.define('oauth_refresh_tokens', {
    refresh_token: { type: DataTypes.STRING, unique: true },
    user_id: DataTypes.STRING,
    is_revoke: DataTypes.BOOLEAN,
    expires_at: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: true,
    tableName: 'oauth_refresh_tokens',
    underscored: true
  });
  oauth_refresh_tokens.associate = function(models) {
    // associations can be defined here
  };
  return oauth_refresh_tokens;
};