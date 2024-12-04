"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      students.hasMany(models.marks, {
        foreignKey: "student_id",
        onDelete: "cascade",
      });
    }
  }
  students.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM("Male", "Female", "Other"),
      },
      dob: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      address: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      enrollment_date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("Active", "Suspended"),
        defaultValue: "Active",
      },
      is_delete: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      profile_picture: {
        allowNull: true,
        type: DataTypes.TEXT,
        // get() {
        //   const value = this.getDataValue("profile_picture");
        //   return value ? `${process.env.FRONTEND_IMAGE_PATH}/students/${value}` : null;
        // },
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
      modelName: "students",
    }
  );
  return students;
};
