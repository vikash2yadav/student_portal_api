"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subjects.hasMany(models.marks, {
        foreignKey: "subject_id",
        onDelete: "cascade",
      });
    }
  }
  subjects.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      code: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("Active", "Inactive"),
        defaultValue: "Active",
      },
      is_delete: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "subjects",
    }
  );
  return subjects;
};
