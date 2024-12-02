"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM("Male", "Female", "Other"),
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      enrollment_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("Active", "Suspended"),
        defaultValue: "Active",
      },
      is_delete: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      profile_picture: {
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("students");
  },
};
