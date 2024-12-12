const { STATUS_CODES, STATUS_MESSAGES, EXITS } = require("../Config/constant");
const studentModel = new (require("../Model/students"))();

class studentController {
  // add student
  async add(req, res) {
    try {
      let data = await studentModel.add(req?.body);

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        res.handler.conflict(undefined, EXITS.STUDENT);
        return;
      }

      return res.handler.success(data, STATUS_MESSAGES.STUDENT.ADD);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update student
  async update(req, res) {
    try {
      let data = await studentModel.update(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        res.handler.notFound(undefined, "Student NOT Found");
        return;
      }

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        res.handler.conflict(undefined, "Email already Exist");
        return;
      }

      return res.handler.success(data, STATUS_MESSAGES.STUDENT.UPDATE);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update status
  async status(req, res) {
    try {
      let data = await studentModel.status(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, " Student NOT Found");
      }

      return res.handler.success(data, "Student Status Changed Successfully");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // delete student
  async delete(req, res) {
    try {
      let data = await studentModel.delete(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, "Student Not Found");
      }

      return res.handler.success(data, STATUS_MESSAGES.STUDENT.DELETE);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // getById student
  async getById(req, res) {
    try {
      let data = await studentModel.getById(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, "Student Not Found");
      }

      return res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // list student
  async list(req, res) {
    try {
      let data = await studentModel.list();

      return res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }


  // add student mark
  async addMarks(req, res) {
    try {
      let data = await studentModel.addMarks(req?.body);

      if (data?.status === STATUS_CODES.NOT_VALID_DATA) {
        return res.handler.notFound(undefined, "Marks Data Not Valid");
      }

      return res.handler.success(data, "Mark Added Successfully");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

}
module.exports = studentController;
