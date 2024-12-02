"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("students", [
      {
        first_name: "John",
        last_name: "Doe",
        email: "john@mailinator.com",
        gender: "Male",
        dob: "2000-05-15",
        phone_number: "7876765653",
        address: "123 Main St, Ahmedabad",
        enrollment_date: "2021-09-01",
        status: "Active",
        is_delete: false,
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane@mailinator.com",
        gender: "Female",
        dob: "1999-08-25",
        phone_number: "9876543210",
        address: "456 Elm St, Anytown, USA",
        enrollment_date: "2020-08-15",
        status: "Active",
        is_delete: false,
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("students", null, {});
  },
};
