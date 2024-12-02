"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("marks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      student_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "students", key: "id" },
      },
      subject_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        references: { model: "subjects", key: "id" },
      },
      mark: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      total: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("marks");
  },
};
