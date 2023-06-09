'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profiles.belongsTo(models.Accounts)
    }
    static fullName() {
      return `${this.firstName} ${this.lastName}`
    }

  }
  Profiles.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profilePicture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profiles',
  });
  return Profiles;
};