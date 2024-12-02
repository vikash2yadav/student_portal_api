const { STATUS_CODES } = require("../Config/constant");

const studentModel = new (require("../Model/students"))();

class studentController {
  // add student
  async add(req, res) {
    try {
      let data = await studentModel.add(req?.body);

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        res.handler.conflict(undefined, "Exist");
        return ;
      }

      return res.handler.success(data, "Added");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update student
  async update(req, res) {
    try {
      let data = await studentModel.update(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        res.handler.notFound(undefined, "NOT Found");
      return;
      }

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        res.handler.conflict(undefined, "Exist");
        return;
      }

      return res.handler.success(data, "Updated");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update status
  async status(req, res) {
    try {
      let data = await studentModel.status(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, "NOT Found");
      }

      return res.handler.success(data, "Changed");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // delete student
  async delete(req, res) {
    try {
      let data = await studentModel.delete(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, "Not Found");
      }

      return res.handler.success(data, "Deleted");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // getById student
  async getById(req, res) {
    try {
      let data = await studentModel.getById(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, "Not Found");
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
}
module.exports = studentController;
