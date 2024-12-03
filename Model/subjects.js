const { Op } = require("sequelize");
const { STATUS_CODES } = require("../Config/constant");
const { subjects: subjectSchema } = require("../Database/Schema/index");

class subjectModel {
  // add subject
  async add(bodyData) {
    const { name, code } = bodyData;

    const existSubject = await subjectSchema.findOne({
      where: {
        name,
      },
    });

    if (existSubject) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
        message: "name exist",
      };
    }

    const existcode = await subjectSchema.findOne({
      where: {
        code,
      },
    });

    if (existcode) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
        message: "code exist",
      };
    }

    return await subjectSchema.create(bodyData);
  }

  // update subject
  async update(bodyData) {
    const { name, code } = bodyData;
    let checkData = await subjectSchema.findOne({
      where: {
        id,
        is_delete: false,
      },
    });

    if (!checkData) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    const existName = await subjectSchema.findOne({
      where: {
        name,
        id: { [Op.ne]: id },
      },
    });

    if (existName) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
        message: "Name exist",
      };
    }

    const existCode = await subjectSchema.findOne({
      where: {
        code,
        id: { [Op.ne]: id },
      },
    });

    if (existCode) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
        message: "Code exist",
      };
    }

    return await subjectSchema.update(bodyData, {
      where: {
        id,
      },
    });
  }

  // update subject
  async status(bodyData) {
    const { id, status } = bodyData;
    let checkData = await subjectSchema.findOne({
      where: {
        id,
        is_delete: false,
      },
    });

    if (!checkData) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await subjectSchema.update(
      { status },
      {
        where: {
          id,
        },
      }
    );
  }

  // delete subject
  async delete(id) {
    let checkData = await subjectSchema.findOne({
      where: {
        id,
        is_delete: false,
      },
    });

    if (!checkData) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return await subjectSchema.update(
      { is_delete: true },
      {
        where: {
          id,
        },
      }
    );
  }

  // getById subject
  async getById(id) {
    let checkData = await subjectSchema.findOne({
      where: {
        id,
        is_delete: false,
      },
    });

    if (!checkData) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return checkData;
  }

  // list subject
  async list() {
    return await subjectSchema.findAll({
      where: {
        is_delete: false,
      },
    });
  }
}
module.exports = subjectModel;
