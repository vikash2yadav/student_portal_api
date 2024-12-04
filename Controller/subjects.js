const { STATUS_CODES } = require("../Config/constant");

const subjectModel = new (require("../Model/subjects"))();

class subjectController {
  // add subject
  async add(req, res) {
    try {
      let data = await subjectModel.add(req?.body);

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        return res.handler.conflict(undefined, data?.message);
      }

      return res.handler.success(data, "Subject Added Successfully");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update subject
  async update(req, res) {
    try {
      let data = await subjectModel.update(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        return res.handler(undefined, "Subject NOT Found");
      }

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        return res.handler(undefined, data?.message);
      }

      return res.handler.success(data, "Subject Updated Successfully");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update subject status
  async status(req, res) {
    try {
      let data = await subjectModel.status(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        return res.handler(undefined, "Subject NOT Found");
      }

      return res.handler.success(data, "Subject Status Changed Successfully");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // delete subject
  async delete(req, res) {
    try {
      let data = await subjectModel.delete(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, "Subject Not Found");
      }

      return res.handler.success(data, "Subject Deleted Successfully");
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // getById subject
  async getById(req, res) {
    try {
      let data = await subjectModel.getById(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, "Subject Not Found");
      }

      return res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // list subject
  async list(req, res) {
    try {
      let data = await subjectModel.list();

      return res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }
}
module.exports = subjectController;
