const { Op } = require("sequelize");
const { STATUS_CODES } = require("../Config/constant");
const {
  students: studentSchema,
  marks: markSchema,
  subjects: subjectSchema,
} = require("../Database/Schema/index");

class studentModel {
  // add student
  async add(bodyData) {
    const { email } = bodyData;

    const existEmail = await studentSchema.findOne({
      where: {
        email,
      },
    });

    if (existEmail) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await studentSchema.create(bodyData);
  }

  // update student
  async update(bodyData) {
    const { id, email } = bodyData;
    let checkData = await studentSchema.findOne({
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

    const existEmail = await studentSchema.findOne({
      where: {
        email,
        id: { [Op.ne]: id },
      },
    });

    if (existEmail) {
      return {
        status: STATUS_CODES.ALREADY_REPORTED,
      };
    }

    return await studentSchema.update(bodyData, {
      where: {
        id,
      },
    });
  }

  // update status
  async status(bodyData) {
    const { id, status } = bodyData;
    let checkData = await studentSchema.findOne({
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

    return await studentSchema.update(
      { status },
      {
        where: {
          id,
        },
      }
    );
  }

  // delete student
  async delete(id) {
    let checkData = await studentSchema.findOne({
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

    return await studentSchema.update(
      { is_delete: true },
      {
        where: {
          id,
        },
      }
    );
  }

  // getById student
  async getById(id) {
    let checkData = await studentSchema.findOne({
      where: {
        id,
        is_delete: false,
      },
      include: [
        {
          model: markSchema,
          attributes: ["mark", "total"],
          include: {
            model: subjectSchema,
            attributes: ["name", "code"],
          },
        },
      ],
    });

    if (!checkData) {
      return {
        status: STATUS_CODES.NOT_FOUND,
      };
    }

    return checkData;
  }

  // list student
  async list() {
    return await studentSchema.findAll({
      where: {
        is_delete: false,
      },
      include: [
        {
          model: markSchema,
          attributes: ["mark", "total"],
          include: {
            model: subjectSchema,
            attributes: ["name", "code"],
          },
        },
      ],
    });
  }


    // add student mark
    async addMarks(bodyData) {
     bodyData?.marks?.map(async (mark)=>{
      await markSchema.create({student_id: bodyData?.studentId, subject_id: mark?.subject, mark: mark?.marks, total: mark?.total});
     })
  
      return {
        status: STATUS_CODES?.SUCCESS
      };
    }
}
module.exports = studentModel;
