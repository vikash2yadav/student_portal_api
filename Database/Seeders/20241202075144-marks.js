"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("marks", [
      {
        student_id: 1,
        subject_id: 1,
        mark: 60,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        subject_id: 2,
        mark: 90,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        subject_id: 3,
        mark: 98,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        subject_id: 4,
        mark: 77,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        subject_id: 5,
        mark: 66,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        subject_id: 1,
        mark: 56,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        subject_id: 2,
        mark: 76,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        subject_id: 3,
        mark: 68,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        subject_id: 4,
        mark: 87,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        subject_id: 5,
        mark: 84,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("marks", null, {});
  },
};
