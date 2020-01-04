'use strict';
module.exports = (sequelize, DataTypes) => {
  const create_artist = sequelize.define('create_artist', {
    name: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {});
  create_artist.associate = function(models) {
    // associations can be defined here
  };
  return create_artist;
};