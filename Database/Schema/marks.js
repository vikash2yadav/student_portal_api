"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class marks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      marks.belongsTo(models.students, {
        foreignKey: "student_id",
        onDelete: "cascade",
      });
      marks.belongsTo(models.subjects, {
        foreignKey: "subject_id",
        onDelete: "cascade",
      });
    }
  }
  marks.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20).UNSIGNED,
      },
      student_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "students", key: "id" },
      },
      subject_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20).UNSIGNED,
        references: { model: "students", key: "id" },
      },
      mark: {
        allowNull: false,
        type: DataTypes.DECIMAL(6, 2),
      },
      total: {
        allowNull: false,
        type: DataTypes.DECIMAL(6, 2),
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
      modelName: "marks",
    }
  );
  return marks;
};
