"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("subjects", [
      {
        name: "C",
        code: "101",
        status: "Active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "C++",
        code: "102",
        status: "Active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JavaScript",
        code: "103",
        status: "Active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Java",
        code: "104",
        status: "Active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Python",
        code: "105",
        status: "Active",
        is_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("subjects", null, {});
  },
};
