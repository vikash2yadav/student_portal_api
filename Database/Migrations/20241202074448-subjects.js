"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("subjects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("Active", "Inactive"),
        defaultValue: "Active",
      },
      is_delete: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("subjects");
  },
};
